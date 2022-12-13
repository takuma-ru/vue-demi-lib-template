module.exports = [
]

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'atomic',
        message: 'Please select directory',
        choices: [ 'layouts', 'utils', 'content', 'enter by yourself'  ]
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Please enter a component name',
        validate: input => input !== ''
      },
      {
        type: 'confirm',
        name: 'isProps',
        message: 'Use Props ?',
        choices: [ 'Yes', 'No' ],
        initial: 'Yes'
      },
      {
        type: 'confirm',
        name: 'isEmit',
        message: 'Use Emit ?',
        choices: [ 'Yes', 'No' ],
        initial: 'Yes'
      }
    ]

    return inquirer
      .prompt(questions)
      .then(answers => {
        const { atomic } = answers
        const questions = []

        if (atomic == 'enter by yourself') {
          questions.push({
            type: 'input',
            name: 'atomic',
            message: `Please input atomic directory name`,
            validate: input => input !== ''
          })
        }

        return inquirer.prompt(questions).then(nextAnswers => Object.assign({}, answers, nextAnswers))
      })
  }
}
