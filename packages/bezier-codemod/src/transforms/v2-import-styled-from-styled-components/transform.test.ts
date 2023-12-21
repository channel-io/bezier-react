import { testTransformFunction } from '../../utils/test.js'

import importTransform from './transform.js'

describe('import transform', () => {
  it('should transform styled import from bezier-react to styled-components (1)', () => {
    testTransformFunction(__dirname, 'styled1', importTransform)
  })

  it('should transform styled import from bezier-react to styled-components (2)', () => {
    testTransformFunction(__dirname, 'styled2', importTransform)
  })

  it('should transform styled import from bezier-react to styled-components (3)', () => {
    testTransformFunction(__dirname, 'styled3', importTransform)
  })

  it('should transform styled import from bezier-react to styled-components (4)', () => {
    testTransformFunction(__dirname, 'styled4', importTransform)
  })
})
