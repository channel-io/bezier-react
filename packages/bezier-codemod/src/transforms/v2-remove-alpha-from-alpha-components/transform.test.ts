import { testTransformFunction } from '../../utils/test.js'

import stackTransform from './transform.js'

describe('import transform', () => {
  it('should add legacy prefix to components to be deprecated in tsx file', () => {
    testTransformFunction(__dirname, 'legacy1', stackTransform)
  })

  it('should add legacy prefix to components to be deprecated in styled component file', () => {
    testTransformFunction(__dirname, 'legacy2', stackTransform)
  })

  it('should remove alpha prefix from Alpha prefixed components in tsx file', () => {
    testTransformFunction(__dirname, 'alpha3', stackTransform)
  })

  it('should remove alpha prefix from Alpha prefixed components in styled component file', () => {
    testTransformFunction(__dirname, 'alpha4', stackTransform)
  })
})
