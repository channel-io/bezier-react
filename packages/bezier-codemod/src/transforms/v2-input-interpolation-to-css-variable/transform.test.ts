import { testTransformFunction } from '../../utils/test.js'

import interpolationTransform from './transform.js'

describe('input interpolation transform', () => {
  it('should transform input interpolation to css variable', () => {
    testTransformFunction(__dirname, 'input-interpolation', interpolationTransform)
  })
})
