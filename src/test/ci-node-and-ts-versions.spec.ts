// When running on CI, double-check that we are testing against the versions of node
// and typescript in the test matrix.

import { execSync } from 'child_process';
import semver = require('semver');
import { ctxTsNode, ts } from './helpers';
import { context, expect } from './testlib';

const test = context(ctxTsNode);
test.suite('Confirm node and typescript versions on CI', (test) => {
  test.runIf(!!process.env.CI);
  test('node version is correct', async (t) => {
    expect(process.env.TEST_MATRIX_NODE_VERSION).toBeDefined();
    expect(
      semver.satisfies(
        process.versions.node,
        process.env.TEST_MATRIX_NODE_VERSION!
      )
    ).toBe(true);
  });
  test('typescript version is correct', async (t) => {
    let expectedVersion = process.env.TEST_MATRIX_TYPESCRIPT_VERSION!;
    expect(expectedVersion).toBeDefined();
    if (expectedVersion === 'next' || expectedVersion === 'latest') {
      const stdout = execSync(
        `npm view typescript@${expectedVersion} version --json`,
        { encoding: 'utf8' }
      );
      t.log(stdout);
      expectedVersion = JSON.parse(stdout);
      expect(ts.version).toBe(expectedVersion);
    } else {
      expect(semver.satisfies(ts.version, expectedVersion)).toBe(true);
    }
  });
});
