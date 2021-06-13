#!/usr/bin/env node

import yargs from 'yargs'
import React from 'react'
import { render } from 'ink'

import App from './App'

yargs.version().help().parse()

render(<App />)
