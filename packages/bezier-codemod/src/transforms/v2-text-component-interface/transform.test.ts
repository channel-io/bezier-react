import { testTransformFunction } from '../../utils/test.js'

import textTransform from './transform.js'

describe('Text component transform', () => {
  it('should transform typography enum to string literal and margin properties to be shorthand', () => {
    testTransformFunction(__dirname, 'text-component-props', textTransform)
  })

  it('should transform properties in attrs object of styled component', () => {
    testTransformFunction(__dirname, 'text-component-attrs', textTransform)
  })
})
