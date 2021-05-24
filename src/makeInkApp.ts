import chalk from 'chalk'
import path from 'path'
import os from 'os'
import fs from 'fs-extra'
import execa from 'execa'
import Listr from 'listr'

import getPackageJsonTemplate from './getPackageJsonTemplate'
import displayDoneMessage from './message/done'
import packageJson from '../package.json'

const dependencies = [
  'lodash@4.17.21',
  'got@11.8.2',
  'ink@3.0.8',
  // Ink does not support react 17 yet
  'react@16.14.0',
  'yargs@17.0.1',
  'chalk@4.1.1',
]

const devDependencies = [
  // Build
  'esbuild@0.12.1',
  'chokidar-cli@2.1.0',
  // Typescript
  'ts-node@10.0.0',
  'typescript@4.2.4',
  // Code quality
  // Cannot upgrade until: https://github.com/SamVerschueren/vscode-linter-xo/issues/91
  'xo@0.39.1',
  'husky@6.0.0',
  'lint-staged@11.0.0',
  'eslint-config-xo-react@0.25.0',
  'eslint-plugin-react@7.23.2',
  'eslint-plugin-react-hooks@4.2.0',
  // Testing
  'ava@3.15.0',
  'ink-testing-library@2.1.0',
  // Types
  '@types/node@15.6.0',
  '@types/lodash@4.14.170',
  '@types/yargs@17.0.0',
  '@types/react@17.0.6',
]

const command = 'yarn'
const yarnAdd = ['add', '--exact']

const makeGameServer = ({ projectName }: { projectName: string }) => {
  const rootPath = path.resolve(projectName)

  console.log(` Creating a new ink app in ${chalk.green(rootPath)}`)
  console.log()

  const tasks = new Listr([
    {
      title: 'Create project folder',
      task: () => {
        if (fs.existsSync(rootPath)) {
          throw new Error('Project folder already exists')
        }

        fs.mkdirSync(rootPath)

        const packageJsonTemplate = getPackageJsonTemplate({ projectName })
        fs.writeFileSync(
          path.join(rootPath, 'package.json'),
          JSON.stringify(packageJsonTemplate, null, 2) + os.EOL,
        )
        return true
      },
    },
    {
      title: 'Git init',
      task: () => {
        try {
          // TODO: Still needed in v6?
          // * Change directory so that Husky gets installed in the right .git folder
          process.chdir(rootPath)
        } catch {
          throw new Error(`Could not change to project directory: ${rootPath}`)
        }

        try {
          execa.sync('git', ['init', '-b', 'main'])

          return true
        } catch (error) {
          throw new Error(`Git repo not initialized ${error}`)
        }
      },
    },
    {
      title: 'Copy template files',
      task: () => {
        const templateDirectory = path.join(__dirname, `/../../template/folder`)

        try {
          fs.copySync(templateDirectory, rootPath)
        } catch (error) {
          throw new Error(`Could not copy template files: ${error}`)
        }

        // * Rename gitignore to prevent npm from renaming it to .npmignore
        // * See: https://github.com/npm/npm/issues/1862
        fs.moveSync(
          path.join(rootPath, 'gitignore'),
          path.join(rootPath, '.gitignore'),
          // @ts-expect-error
          [],
        )
      },
    },
    {
      title: 'Install dev dependencies',
      task: () => {
        const devArgs = yarnAdd.concat('--dev').concat(devDependencies)

        return execa(command, devArgs, { all: true }).all
      },
    },
    {
      title: 'Install dependencies',
      task: () => {
        const productionArgs = yarnAdd.concat(dependencies)

        return execa(command, productionArgs, { all: true }).all
      },
    },
    {
      title: 'Git commit',
      task: () => {
        try {
          execa.sync('git', ['add', '-A'])

          execa.sync('git', [
            'commit',
            '--no-verify',
            '-m',
            `Initialize project using ${packageJson.name}`,
          ])

          execa.sync('git', ['branch', 'release'])

          return true
        } catch (error) {
          throw new Error(`Could not create commit ${error}`)
        }
      },
    },
  ])

  tasks
    .run()
    .then(() => {
      displayDoneMessage({ name: projectName, rootPath })
    })
    .catch((error: any) => {
      console.log()
      console.error(chalk.red(error))
      console.log()
      process.exit(1)
    })
}

export default makeGameServer
