module.exports = [
  {
    type: 'input',
    name: 'pageName',
    message: 'Please enter a page name',
    validate: input => input !== ''
  },
  {
    type: 'input',
    name: 'title',
    message: 'Please enter a page meta title',
    validate: input => input !== ''
  }
]
