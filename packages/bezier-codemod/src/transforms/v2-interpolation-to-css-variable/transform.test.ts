import { testTransformFunction } from '../../utils/test.js'

import inputTransform from './input.js'
import roundTransform from './rounding.js'
import typographyTransform from './typography.js'
import zIndexTransform from './zIndex.js'

describe('typography interpolation transform', () => {
  it('should transform typography interpolation to css variable', () => {
    testTransformFunction(__dirname, 'typography-interpolation', typographyTransform)
  })
})

describe('input interpolation transform', () => {
  it('should transform input interpolation to css variable', () => {
    testTransformFunction(__dirname, 'input-interpolation', inputTransform)
  })
})

describe('rounding interpolation transform', () => {
  it('should transform round interpolation to css variable', () => {
    testTransformFunction(__dirname, 'rounding-interpolation', roundTransform)
  })
})

describe('z-index interpolation transform', () => {
  it('should transform z-index interpolation to css variable in styled-component', () => {
    testTransformFunction(__dirname, 'z-index-interpolation-in-styled-component', zIndexTransform)
  })

  it('should transform z-index enum to css variable', () => {
    testTransformFunction(__dirname, 'z-index-enum', zIndexTransform)
  })

  it('should transform z-index enum to css variable when used as prop', () => {
    testTransformFunction(__dirname, 'z-index-enum-as-prop', zIndexTransform)
  })

  it('should not transform z-index enum if it is not imported from bezier-react', () => {
    testTransformFunction(__dirname, 'z-index-enum-not-from-bezier-react', zIndexTransform)
  })
})
