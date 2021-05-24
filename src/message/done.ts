import chalk from 'chalk'

const displayDoneMessage = ({
  name,
  rootPath,
}: {
  name: string
  rootPath: string
}) => {
  console.log()
  console.log(
    ` ${chalk.green('Success!')} Created ${chalk.cyan(name)} at ${chalk.cyan(
      rootPath,
    )}`,
  )
  console.log()
  console.log(' Start the app by typing:')
  console.log()
  console.log(chalk.cyan(`   cd ${name}`))
  console.log()
  console.log(`   ${chalk.cyan('yarn start')}`)
  console.log()
  console.log(' Good luck!')
  console.log()
}

export default displayDoneMessage
