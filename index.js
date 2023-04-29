import { execa } from 'execa';
import { promptCommit } from './src/committer.js';

async function main() {
  if (!process.argv[2]) throw new Error('Not action provided');
  if (['-a', '--add'].includes(process.argv[2])) {
    execa('git', ['add', '.']);
  } else {
    const command = await promptCommit();
    console.log(command);
    execa('git', command);
  }
}

main();
