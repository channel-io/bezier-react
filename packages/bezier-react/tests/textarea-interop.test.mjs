import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import test from 'node:test'

import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const require = createRequire(import.meta.url)

// Exercise the published entries without a bundler or a test runner normalizing
// external dependencies. Source-level tests do not cover this boundary.
for (const entry of [
  '@channel.io/bezier-react',
  '@channel.io/bezier-react/beta',
]) {
  for (const format of ['CJS', 'ESM']) {
    test(`${format} ${entry} renders TextArea`, async () => {
      const { TextArea } =
        format === 'CJS' ? require(entry) : await import(entry)
      const markup = renderToStaticMarkup(
        createElement(TextArea, { value: 'Hello Bezier', readOnly: true })
      )

      assert.match(markup, /<textarea\b/)
      assert.match(markup, />Hello Bezier<\/textarea>/)
    })
  }
}
