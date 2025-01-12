import { Command, CommanderStatic } from 'commander';
import {
  BettererCLIArguments,
  BettererCLIConfig,
  BettererCLIEnvConfig,
  BettererCLIInitConfig,
  BettererCLIMergeConfig,
  BettererCLIResultsConfig,
  BettererCLIUpgradeConfig
} from './types';

let commander = new Command();

export function cliOptions(argv: BettererCLIArguments): BettererCLIConfig {
  commander = new Command();
  cacheOption();
  configPathsOption();
  excludesOption();
  filtersOption();
  ignoresOption();
  reportersOption();
  resultsPathOption();
  silentOption();
  strictOption();
  tsconfigPathOption();
  updateOption();
  workersOption();
  const options = setEnv<BettererCLIConfig>(argv);
  options.include = options.args;
  return options;
}

export function initOptions(argv: BettererCLIArguments): BettererCLIInitConfig {
  commander = new Command();
  automergeOption();
  configPathOption();
  resultsPathOption();
  return setEnv<BettererCLIInitConfig>(argv);
}

export function mergeOptions(argv: BettererCLIArguments): BettererCLIMergeConfig {
  commander = new Command();
  resultsPathOption();
  const options = setEnv<BettererCLIMergeConfig>(argv);
  options.contents = options.args;
  return options;
}

export function resultsOptions(argv: BettererCLIArguments): BettererCLIResultsConfig {
  commander = new Command();
  configPathsOption();
  excludesOption();
  filtersOption();
  resultsPathOption();
  const options = setEnv<BettererCLIConfig>(argv);
  options.include = options.args;
  return options;
}

export function upgradeOptions(argv: BettererCLIArguments): BettererCLIUpgradeConfig {
  commander = new Command();
  configPathsOption();
  saveOption();
  return setEnv<BettererCLIUpgradeConfig>(argv);
}

function setEnv<T extends BettererCLIEnvConfig>(argv: BettererCLIArguments): T & CommanderStatic {
  commander.option('-d, --debug', 'Enable verbose debug logging', false);
  commander.option('-l, --debug-log [value]', 'File path to save verbose debug logging to disk', './betterer.log');

  const parsed = commander.parse(argv) as unknown as T & CommanderStatic;
  if (parsed.debug) {
    process.env.BETTERER_DEBUG = '1';
    process.env.BETTERER_DEBUG_TIME = '1';
    process.env.BETTERER_DEBUG_VALUES = '1';
    if (parsed.debugLog) {
      process.env.BETTERER_DEBUG_LOG = parsed.debugLog;
    }
  }
  return parsed;
}

function cacheOption(): void {
  commander.option('--cache', 'When present, Betterer will only run on changed files.');
  commander.option('--cachePath [value]', 'Path to Betterer cache file relative to CWD');
}

function configPathOption(): void {
  commander.option('-c, --config [value]', 'Path to test definition file relative to CWD');
}

function configPathsOption(): void {
  commander.option(
    '-c, --config [value]',
    'Path to test definition file relative to CWD. Takes multiple values',
    argsToArray
  );
}

function automergeOption(): void {
  commander.option('--automerge', 'Enable automatic merging for the Betterer results file');
}

function resultsPathOption(): void {
  commander.option('-r, --results [value]', 'Path to test results file relative to CWD');
}

function tsconfigPathOption(): void {
  commander.option('-t, --tsconfig [value]', 'Path to TypeScript config file relative to CWD');
}

function filtersOption(): void {
  commander.option(
    '-f, --filter [value]',
    'RegExp filter for tests to run. Add "!" at the start to negate. Takes multiple values',
    argsToArray
  );
}

function excludesOption(): void {
  commander.option('--exclude [value]', 'RegExp filter for files to exclude. Takes multiple values', argsToArray);
}

function ignoresOption(): void {
  commander.option('-i, --ignore [value]', 'Glob pattern for files to ignore. Takes multiple values', argsToArray);
}

function reportersOption(): void {
  commander.option(
    '-R, --reporter [value]',
    'npm package name for a Betterer reporter. Takes multiple values',
    argsToArray
  );
}

function saveOption(): void {
  commander.option('--save', 'When present, Betterer will save the result of an upgrade to disk.');
}

function silentOption(): void {
  commander.option(
    '-s, --silent',
    'When present, all default reporters will be disabled. Custom reporters will still work normally.'
  );
}

function strictOption(): void {
  commander.option(
    '--strict',
    'When present, the "how to update" message will not be shown and the `--update` option will be set to false.'
  );
}

function updateOption(): void {
  commander.option('-u, --update', 'When present, the results file will be updated, even if things get worse.');
}

function workersOption(): void {
  commander.option(
    '--workers [value]',
    'number of workers to use. Set to `false` to run tests serially. Defaults to number of CPUs - 2.',
    argsToPrimitive
  );
}

function argsToArray(value: string, previous: BettererCLIArguments = []): BettererCLIArguments {
  return previous.concat([value]);
}

function argsToPrimitive(value: string): string | number | boolean {
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  const num = parseInt(value);
  if (num.toString() === value) {
    return num;
  }
  return value;
}
