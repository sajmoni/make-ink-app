import { PackageJson } from 'type-fest'

const getPackageJsonTemplate = ({
  projectName,
}: {
  projectName: string
}): PackageJson => {
  const packageJsonTemplate = {
    name: projectName,
    version: '0.0.0',
    private: true,
    bin: 'dist/index.js',
    files: ['dist/'],
    scripts: {
      go: './build-test.sh',
      clean: `rm -f ${projectName}.tgz`,
      build: 'node build.js',
      start:
        'chokidar "src" -c "yarn build && node dist/index.js" --initial --silent',
      test: 'ava',
      qa: 'tsc && xo --fix',
      prepare: 'husky install',
    },
    ava: {
      require: ['ts-node/register'],
      extensions: ['tsx'],
    },
    prettier: {
      trailingComma: 'all',
      semi: false,
      singleQuote: true,
      useTabs: false,
      bracketSpacing: true,
    },
    xo: {
      prettier: true,
      parser: '@typescript-eslint/parser',
      extends: 'xo-react',
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
  }

  return packageJsonTemplate
}

export default getPackageJsonTemplate
