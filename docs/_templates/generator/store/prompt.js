module.exports = [
  {
    type: 'input',
    name: 'storeName',
    message: 'Please enter a store name',
    validate: (input) => {
      if (input.match(/Store/)) {
        return 'Do not include "Store" in the name'
      } else {
        return true
      }
    },
  },
  {
    type: 'confirm',
    name: 'isInterface',
    message: 'Is the type of variable used in store "interface"?',
    choices: [ 'Yes', 'No' ],
    initial: 'Yes',
  }
]