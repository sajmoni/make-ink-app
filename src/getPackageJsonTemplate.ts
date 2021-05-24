const getPackageJsonTemplate = ({ projectName }: { projectName: string }) => {
  const packageJsonTemplate = {
    name: projectName,
    version: '0.0.0',
    private: true,
    scripts: {
      start:
        'chokidar "src" -c "node serve.js && node dist/index.js" --initial --silent',
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
