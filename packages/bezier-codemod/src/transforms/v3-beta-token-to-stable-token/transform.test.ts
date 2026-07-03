import { testTransformFunction } from '../../utils/test.js'

import tokenTransform from './transform.js'

describe('v3 beta token to stable token transform', () => {
  it('renames beta token imports and usages to stable token names', () => {
    testTransformFunction(__dirname, 'basic', tokenTransform)
  })

  it('preserves aliases and rewrites token path string literals', () => {
    testTransformFunction(__dirname, 'alias-and-path', tokenTransform)
  })
})
