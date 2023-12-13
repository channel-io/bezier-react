import { testTransformFunction } from '../../../utils/test.js'
import mixinTransform from '../../mixin-to-css-variable.js'

describe('mixin transform', () => {
  it('should transform mixin interpolation to css variable', () => {
    testTransformFunction(__dirname, 'mixin1', mixinTransform)
  })
})
