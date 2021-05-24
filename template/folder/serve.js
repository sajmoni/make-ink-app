const { build } = require('esbuild')

const buildOptions = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  minify: false,
  outdir: 'dist',
  external: ['ink', 'react', 'yargs'],
  platform: 'node',
}

const run = async () => {
  try {
    await build(buildOptions)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

run()
