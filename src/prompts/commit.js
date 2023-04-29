export const commit = (filter) => [
  {
    type: 'input',
    name: 'project',
    message: '¿Cual es el código del proyecto?',
  },
  {
    type: 'input',
    name: 'number',
    message: '¿Cual es el numero de la tarea?',
  },
  {
    type: 'autocomplete',
    name: 'type',
    message: '¿Que tipo de adición es?',
    source: (answersSoFar, input) => filter(input),
  },
  {
    name: 'title',
    type: 'max-length',
    message: 'Titulo del commit',
    maxLength: 30,
  },
  {
    type: 'input',
    name: 'description',
    message: 'Descripción del commit',
  },
];
