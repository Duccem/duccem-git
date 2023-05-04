export const commit = (filter) => [
  {
    type: 'input',
    name: 'project',
    message: '📝 Project code: ',
  },
  {
    type: 'input',
    name: 'number',
    message: '✅ Issue number: ',
  },
  {
    type: 'autocomplete',
    name: 'type',
    message: '💚 Change type: ',
    emptyText: 'Nothing found!',

    source: (answersSoFar, input) => filter(input),
  },
  {
    name: 'title',
    type: 'max-length',
    message: '📄 Commit title: ',
    maxLength: 30,
    validate(input) {
      if (input == '') {
        return 'You must provide a message';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'description',
    message: '💬 Commit description: ',
  },
];
