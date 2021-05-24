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
    },
    ava: {
      extensions: ['js', 'ts'],
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
    },
  }

  return packageJsonTemplate
}

export default getPackageJsonTemplate