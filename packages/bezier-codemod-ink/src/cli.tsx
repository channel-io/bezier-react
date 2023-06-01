#!/usr/bin/env node
import { render } from 'ink'
import meow from 'meow'
import React from 'react'

import App from './app.js'

const cli = meow(
  `
  Usage
    $ ts-app

  Options
    --name  Your name

  Examples
    $ ts-app --name=Jane
    Hello, Jane
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

render(<App name={cli.flags.name} />)
