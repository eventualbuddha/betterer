import { BettererConfig } from '../config';

import { BettererContextΩ, BettererContextStarted } from '../context';
import { BettererFilePaths, destroyVersionControl } from '../fs';
import { createGlobals } from '../globals';
import { BettererRunWorkerPoolΩ } from '../run';
import { BettererSuiteSummary } from '../suite';
import { normalisedPath } from '../utils';
import { BettererRunHandler, BettererRunner, BettererRunnerJobs } from './types';

const DEBOUNCE_TIME = 200;

export class BettererRunnerΩ implements BettererRunner {
  private _jobs: BettererRunnerJobs = [];
  private _running: Promise<BettererSuiteSummary> | null = null;
  private _started: BettererContextStarted;

  private constructor(
    public readonly config: BettererConfig,
    private _context: BettererContextΩ,
    private _runWorkerPool: BettererRunWorkerPoolΩ
  ) {
    this._started = this._context.start();
  }

  public static async create(options: unknown): Promise<BettererRunnerΩ> {
    try {
      const globals = await createGlobals(options);
      const { config } = globals;
      const runWorkerPool = new BettererRunWorkerPoolΩ(config.workers);
      const context = new BettererContextΩ(globals, runWorkerPool);

      return new BettererRunnerΩ(config, context, runWorkerPool);
    } catch (error) {
      await destroyVersionControl();
      throw error;
    }
  }

  public async run(filePaths: BettererFilePaths): Promise<BettererSuiteSummary> {
    this._addJob(filePaths);
    await this._processQueue();
    return this.stop();
  }

  public queue(filePathOrPaths: string | BettererFilePaths = [], handler?: BettererRunHandler): Promise<void> {
    const filePaths: BettererFilePaths = Array.isArray(filePathOrPaths) ? filePathOrPaths : [filePathOrPaths as string];
    this._addJob(filePaths, handler);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        void (async () => {
          try {
            await this._processQueue();
          } catch (error) {
            reject(error);
          }
          resolve();
        })();
      }, DEBOUNCE_TIME);
    });
  }

  public async stop(): Promise<BettererSuiteSummary>;
  public async stop(force: true): Promise<null>;
  public async stop(force?: true): Promise<BettererSuiteSummary | null> {
    try {
      await this._running;
      const contextSummary = await this._started.end();
      return contextSummary.lastSuite;
    } catch (error) {
      if (force) {
        return null;
      }
      throw error;
    } finally {
      await destroyVersionControl();
      await this._runWorkerPool.destroy();
    }
  }

  private _addJob(filePaths: BettererFilePaths = [], handler?: BettererRunHandler): void {
    const normalisedPaths = filePaths.map(normalisedPath);
    this._jobs.push({ filePaths: normalisedPaths, handler });
  }

  private async _processQueue(): Promise<void> {
    if (this._jobs.length) {
      try {
        const filePaths = new Set<string>();
        this._jobs.forEach((job) => {
          job.filePaths.forEach((path) => {
            filePaths.add(path);
          });
        });
        const changed = Array.from(filePaths).sort();
        const handlers = this._jobs.map((job) => job.handler);
        this._jobs = [];

        this._running = this._context.run(changed);
        const suiteSummary = await this._running;

        handlers.forEach((handler) => handler?.(suiteSummary));
      } catch (error) {
        await this._started.error(error);
      }
    }
  }
}
