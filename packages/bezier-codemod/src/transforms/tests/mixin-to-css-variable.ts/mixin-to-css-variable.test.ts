import { testTransformFunction } from '../../../utils/test.js'
import mixinTransform from '../../mixin-to-css-variable.js'

describe('mixin transform', () => {
  it('should transform foundation to css variable', () => {
    testTransformFunction(__dirname, 'mixin1', mixinTransform)
  })
})
