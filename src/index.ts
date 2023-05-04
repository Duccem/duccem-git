import { execa } from 'execa';
import { promptCommit } from './committer';

async function main() {
  if (!process.argv[2]) throw new Error('Not action provided');
  switch (process.argv[2]) {
    case '-a' || '--add':
      execa('git', ['add', '.']);
      break;
    case '-c' || '--commit':
      const command = await promptCommit();
      execa('git', command);
      break;
    case '-ca' || '--commit-amend':
      execa('git', ['commit', '--amend', '--no-edit']);
    default:
      break;
  }
}

main();
