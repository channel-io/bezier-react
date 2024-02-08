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

  it('should transform styled import from bezier-react to styled-components, and not remove other import declarations', () => {
    testTransformFunction(__dirname, 'import-without-import-clause', importTransform)
  })

  it('should transform properly when there are only named imports ', () => {
    testTransformFunction(__dirname, 'only-named-import', importTransform)
  })
})
