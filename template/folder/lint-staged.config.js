module.exports = {
  '**/*.{ts,tsx}?(x)': () => 'tsc',
  'src/**/*.{ts,tsx,md}': ['xo --fix'],
}
