import { start__ } from '@betterer/cli';

import { createFixture } from '../fixture';

const ARGV = ['node', './bin/betterer'];

describe('betterer cli', () => {
  it('should filter tests by name', async () => {
    const { logs, paths, cleanup, testNames } = await createFixture(
      'filter',
      {
        '.betterer.js': `
const { BettererTest } = require('@betterer/betterer');
const { bigger, smaller } = require('@betterer/constraints');

module.exports = {
  'test 1': () => new BettererTest({
    test: () => 0,
    constraint: bigger
  }),
  'test 2': () => new BettererTest({
    test: () => 0,
    constraint: smaller
  }),
  'test 3': () => new BettererTest({
    test: () => 0,
    constraint: bigger
  })
};
      `
      },
      {
        logFilters: [/: running /, /running.../]
      }
    );

    const fixturePath = paths.cwd;

    const firstRun = await start__(fixturePath, ARGV, false);

    expect(testNames(firstRun.ran)).toEqual(['test 1', 'test 2', 'test 3']);

    const secondRun = await start__(fixturePath, [...ARGV, '--filter', '1'], false);

    expect(testNames(secondRun.ran)).toEqual(['test 1']);

    const thirdRun = await start__(fixturePath, [...ARGV, '--filter', '1', '--filter', '3'], false);

    expect(testNames(thirdRun.ran)).toEqual(['test 1', 'test 3']);

    expect(logs).toMatchSnapshot();

    await cleanup();
  });
});
