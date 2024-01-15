import { testTransformFunction } from '../../utils/test.js'

import borderTransform from './border.js'
import elevationTransform from './elevation.js'
import roundingTransform from './rounding.js'
import spacingTransform from './spacing.js'
import themeTransform from './theme.js'
import transitionTransform from './transition.js'

describe('theme transform', () => {
  it('should transform foundation to css variable', () => {
    testTransformFunction(__dirname, 'theme1', themeTransform)
  })

  it('should not transform foundation to css variable', () => {
    testTransformFunction(__dirname, 'theme2', themeTransform)
  })
})

describe('rounding transform', () => {
  it('should transform foundation to css variable', () => {
    testTransformFunction(__dirname, 'rounding1', roundingTransform)
  })

  it('should not transform foundation to css variable', () => {
    testTransformFunction(__dirname, 'rounding2', roundingTransform)
  })
})

describe('border transform', () => {
  it('should transform foundation to css variable', () => {
    testTransformFunction(__dirname, 'border1', borderTransform)
  })

  it('should not transform foundation to css variable', () => {
    testTransformFunction(__dirname, 'border2', borderTransform)
  })
})

describe('elevation transform', () => {
  it('should transform foundation to css variable', () => {
    testTransformFunction(__dirname, 'elevation1', elevationTransform)
  })

  it('should not transform foundation to css variable', () => {
    testTransformFunction(__dirname, 'elevation2', elevationTransform)
  })
})

describe('transition transform', () => {
  it('should transform foundation to css variable', () => {
    testTransformFunction(__dirname, 'transition1', transitionTransform)
  })

  it('should not transform foundation to css variable', () => {
    testTransformFunction(__dirname, 'transition2', transitionTransform)
  })
})

describe('spacing transform', () => {
  it('should transform spacing foundation to pixels', () => {
    testTransformFunction(__dirname, 'spacing1', spacingTransform)
  })

  it('should not transform spacing foundation to pixels', () => {
    testTransformFunction(__dirname, 'spacing2', spacingTransform)
  })
})
