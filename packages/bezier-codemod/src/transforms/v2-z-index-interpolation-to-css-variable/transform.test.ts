import { testTransformFunction } from '../../utils/test.js'

import interpolationTransform from './transform.js'

describe('z-index interpolation transform', () => {
  it('should transform z-index interpolation to css variable in styled-component', () => {
    testTransformFunction(__dirname, 'z-index-interpolation-in-styled-component', interpolationTransform)
  })

  it('should transform z-index enum to css variable', () => {
    testTransformFunction(__dirname, 'z-index-enum', interpolationTransform)
  })

  it('should transform z-index enum to css variable when used as prop', () => {
    testTransformFunction(__dirname, 'z-index-enum-as-prop', interpolationTransform)
  })

  it('should not transform z-index enum if it is not imported from bezier-react', () => {
    testTransformFunction(__dirname, 'z-index-enum-not-from-bezier-react', interpolationTransform)
  })
})
