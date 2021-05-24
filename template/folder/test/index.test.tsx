import test from 'ava'
import React from 'react'
import { render } from 'ink-testing-library'

import App from '../src/App'

test('Example test', (t) => {
  const { lastFrame } = render(<App name={'Simon'} />)
  t.is(lastFrame(), ' Hello Simon from React!')
})
