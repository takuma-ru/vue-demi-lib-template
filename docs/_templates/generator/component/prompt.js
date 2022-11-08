module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: 'Please select directory',
    choices: [ 'components/content', 'components' ],
  },
  {
    type: 'input',
    name: 'componentName',
    message: 'Please enter a component name',
    validate: (input) => input !== '',
  },
  {
    type: 'confirm',
    name: 'isProps',
    message: 'Use Props ?',
    choices: [ 'Yes', 'No' ],
    initial: 'Yes',
  }
]