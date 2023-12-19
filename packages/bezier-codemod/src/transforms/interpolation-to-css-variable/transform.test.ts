import { testTransformFunction } from '../../utils/test.js'

import interpolationTransform from './transform.js'

describe('mixin transform', () => {
  it('should transform mixin interpolation to css variable', () => {
    testTransformFunction(__dirname, 'interpolation1', interpolationTransform)
  })
})
