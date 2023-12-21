import { testTransformFunction } from '../../utils/test.js'

import stackTransform from './transform.js'

describe('import transform', () => {
  it('should add legacy prefix from Stack component in tsx file', () => {
    testTransformFunction(__dirname, 'stack1', stackTransform)
  })

  it('should add legacy prefix from Stack component in styled component file', () => {
    testTransformFunction(__dirname, 'stack2', stackTransform)
  })

  it('should remove alpha prefix from AlphaStack component in tsx file', () => {
    testTransformFunction(__dirname, 'stack3', stackTransform)
  })

  it('should remove alpha prefix from AlphaStack component in styled component file', () => {
    testTransformFunction(__dirname, 'stack4', stackTransform)
  })
})
