import { testTransformFunction } from '../../../utils/test.js'
import borderTransform from '../../foundation-to-css-variable/border.js'
import elevationTransform from '../../foundation-to-css-variable-elevation.js'
import roundingTransform from '../../foundation-to-css-variable-rounding.js'
import themeTransform from '../../foundation-to-css-variable-theme.js'
import transitionTransform from '../../foundation-to-css-variable-transition.js'

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
