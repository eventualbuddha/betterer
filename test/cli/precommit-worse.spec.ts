import { precommit__, start__ } from '@betterer/cli';
import simpleGit from 'simple-git';

import { createFixture } from '../fixture';

const ARGV = ['node', './bin/betterer'];

describe('betterer precommit', () => {
  it('should not update the changeset when a test gets worse', async () => {
    const { paths, logs, cleanup, resolve, writeFile } = await createFixture('precommit-worse', {
      'src/index.ts': `
const a = 'a';
const one = 1;
console.log(a * one);
      `,
      '.betterer.ts': `
import { typescript } from '@betterer/typescript';

export default {
  test: () => typescript('./tsconfig.json', {
    strict: true
  }).include('./src/**/*.ts')
};    
      `,
      'tsconfig.json': `
{
  "compilerOptions": {
    "noEmit": true,
    "lib": ["esnext"],
    "moduleResolution": "node",
    "target": "ES5",
    "typeRoots": ["../../node_modules/@types/"],
    "resolveJsonModule": true
  },
  "include": ["./src/**/*", ".betterer.ts"]
}
      `
    });

    const fixturePath = paths.cwd;
    const indexPath = resolve('./src/index.ts');

    await start__(fixturePath, ARGV, false);

    await writeFile(indexPath, `const a = 'a';\nconst one = 1;\nconsole.log(one * a);\nconsole.log(a * one);`);

    const suiteSummary = await precommit__(fixturePath, ARGV);

    expect(suiteSummary.worse).toHaveLength(1);

    expect(logs).toMatchSnapshot();

    const git = simpleGit();
    await git.init();
    const status = await git.status([paths.results]);
    expect(status.staged).toEqual([]);

    await cleanup();
  });
});
