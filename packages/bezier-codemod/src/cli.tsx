#!/usr/bin/env node
import React from 'react'

import { render } from 'ink'
import meow from 'meow'

import App from './App.js'

meow(
  `
  Usage:
    $ npx @channel.io/bezier-codemod

  More info:
    https://github.com/channel-io/bezier-react
`,
  {
    importMeta: import.meta,
    flags: {
      name: {
        type: 'string',
      },
    },
  },
)

render(<App />)
