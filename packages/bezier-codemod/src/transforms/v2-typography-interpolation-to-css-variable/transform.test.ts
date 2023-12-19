import { testTransformFunction } from '../../utils/test.js'

import interpolationTransform from './transform.js'

describe('typography interpolation transform', () => {
  it('should transform typography interpolation to css variable', () => {
    testTransformFunction(__dirname, 'typography-interpolation', interpolationTransform)
  })
})
