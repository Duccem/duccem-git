import inquirer from 'inquirer';
import inquirerPrompt from 'inquirer-autocomplete-prompt';
import { emojis } from './emojis.js';
import { commit } from './prompts/commit.js';
const maxLengthPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('autocomplete', inquirerPrompt);
inquirer.registerPrompt('max-length', maxLengthPrompt);

const filterEmoji = (prompt = ''): string[] => {
  const filtered = emojis.filter((emoji) => emoji.description.toLowerCase().includes(prompt.toLowerCase()));
  return filtered.map((emoji) => `${emoji.emoji} ${emoji.description}`);
};

export const promptCommit = async (): Promise<string[]> => {
  const answers = await inquirer.prompt(commit(filterEmoji));
  const emoji = emojis.find((e) => answers.type.includes(e.description));
  const code = `[${answers.project?.toUpperCase() || 'TASK'}-${answers.number}]`;
  let title = [code, emoji?.emoji, answers.title];
  return ['commit', '-m', title.join(' '), '-m', answers.description];
};
