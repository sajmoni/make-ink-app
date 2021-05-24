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

### Tooling

- :m: [`typescript`](https://github.com/microsoft/TypeScript)

- :zap: [esbuild](https://github.com/evanw/esbuild) - Bundler

Optional, but included since it's faster than running `tsc`. Rebuild time in development is practically instant with `esbuild`, while `tsc` takes about >1s which can become frustrating in the long run.

- :policeman: [`xo`](https://github.com/xojs/xo) - Linter

- :nail_care: [`prettier`](https://github.com/prettier/prettier) - Formatter

- :no_entry_sign: :poop: [`lint-staged`](https://github.com/okonet/lint-staged) + :dog: [`husky`](https://github.com/typicode/husky) - Run `tsc` and `xo` on each commit

- :straight_ruler: [`ava`](https://github.com/avajs/ava) - Tests

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
