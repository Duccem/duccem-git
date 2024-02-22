#!/usr/bin/env node
import { execa } from 'execa';
import { promptCommit } from './committer.js';

async function main() {
  let flag = process.argv[2];
  if (!flag) flag = '-c';
  switch (flag) {
    case '-a' || '--add':
      execa('git', ['add', '.']);
      break;
    case '-c' || '--commit':
      const command = await promptCommit();
      execa('git', command);
      break;
    case '-ca' || '--commit-amend':
      execa('git', ['commit', '--amend', '--no-edit']);
      break;
    case '-p' || '--push':
      execa('git', ['push', '--force']);
    default:
      break;
  }
}

main();
