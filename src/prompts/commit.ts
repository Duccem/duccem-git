export const commit = (filter: any) => [
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

    source: (answersSoFar: any, input: any) => filter(input),
  },
  {
    name: 'title',
    type: 'max-length',
    message: '📄 Commit title: ',
    maxLength: 30,
    validate(input: any) {
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
