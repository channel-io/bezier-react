#!/usr/bin/env node

import meow from 'meow'

import {
  isTransformName,
  runTransform,
  transformMap,
} from './transformers.js'

const cli = meow(
  `
  Usage:
    $ npx @channel.io/bezier-codemod
    $ npx @channel.io/bezier-codemod --transform v3-beta-token-to-stable-token --path "src/**/*.{ts,tsx}"

  More info:
    https://github.com/channel-io/bezier-react
`,
  {
    importMeta: import.meta,
    flags: {
      transform: {
        type: 'string',
        shortFlag: 't',
      },
      path: {
        type: 'string',
        shortFlag: 'p',
      },
    },
  }
)

const transformName = cli.flags.transform
const filePath = cli.flags.path

if (transformName || filePath) {
  if (!transformName || !isTransformName(transformName)) {
    console.error(
      [
        `Invalid transform: ${transformName ?? '(empty)'}`,
        '',
        'Available transforms:',
        ...Object.keys(transformMap).map((name) => `- ${name}`),
      ].join('\n')
    )
    process.exit(1)
  }

  if (!filePath) {
    console.error('Missing required --path option.')
    process.exit(1)
  }

  const startTime = performance.now()
  const { errors, totalFileNum, transformedFileNum } = await runTransform({
    transformName,
    filePath,
  })
  const executionTime = ((performance.now() - startTime) / 1000).toFixed(3)

  errors.forEach(({ error, filePath: errorFilePath }) => {
    console.error(error)
    console.error(errorFilePath)
  })

  console.log(`Scanned files: ${totalFileNum}`)
  console.log(`Transformed files: ${transformedFileNum}`)
  console.log(`Execution time: ${executionTime}s`)

  if (errors.length > 0) {
    process.exit(1)
  }
} else {
  const { render } = await import('ink')
  const { default: App } = await import('./App.js')

  render(<App />)
}
