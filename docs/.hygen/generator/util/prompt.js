module.exports = {
  prompt: ({ inquirer }) => {
    // defining questions in arrays ensures all questions are asked before next prompt is executed
    const questions = [{
      type: 'input',
      name: 'fileName',
      message: 'Please enter script file name',
      validate: input => input !== ''
    },
    {
      type: 'select',
      name: 'atomic',
      message: 'Please select directory',
      choices: [ 'utils', 'style', 'firebase', 'enter by yourself' ],
    }]

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
  },
}