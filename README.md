<h1 align="center">
  make-ink-app
</h1>
<h4 align="center">
    Create an <a href="https://github.com/vadimdemedes/ink">ink</a> app from the command line
</h4>

<div align="center">
  <img src="https://badgen.net/npm/v/make-ink-app?icon=npm" />
  <img src="https://badgen.net/github/last-commit/sajmoni/make-ink-app?icon=github" />
</div>

---

## :sparkles: Features

- :octopus: [ink](https://github.com/vadimdemedes/ink)

- :atom: [react](https://github.com/facebook/react)

- :zap: [esbuild](https://github.com/evanw/esbuild)

Uses esbuild since it's very fast. Waiting >1s for the app to rebuild in development (Using `tsc`) can become frustrating in the long run.

- :m: [`typescript`](https://github.com/microsoft/TypeScript)

- :policeman: [`xo`](https://github.com/xojs/xo)

- :nail_care: [`prettier`](https://github.com/prettier/prettier)

- :no_entry_sign: :poop: [`lint-staged`](https://github.com/okonet/lint-staged) + :dog: [`husky`](https://github.com/typicode/husky)

- :straight_ruler: [`ava`](https://github.com/avajs/ava)

- :crayon: [`chalk`](https://github.com/chalk/chalk)

---

## :wrench: Usage

```
npx make-ink-app <app-name>
```

_Usage with `npx` ensures that you are always using the latest version_

`make-ink-app` will do the following:

- Create a new folder called `<app-name>`
- Copy all template files to that folder
- Install the dependencies
- Make an initial commit
