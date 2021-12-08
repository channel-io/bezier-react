/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import GlobalHeader from './GlobalHeader'
import GlobalHeaderProps from './GlobalHeader.types'

const GLOBAL_HEADER_TEST_ID = 'ch-test-global-header'

describe('GlobalHeader Test >', () => {
  let props: GlobalHeaderProps

  beforeEach(() => {
    props = {
      testId: GLOBAL_HEADER_TEST_ID,
      isWindows: false,
    }
  })

  const renderGlobalHeader = (customProps?: GlobalHeaderProps) =>
    render(<GlobalHeader {...props} {...customProps} />)

  it('GlobalHeader should have 100% width', () => {
    const { getByTestId } = renderGlobalHeader()
    const renderedGH = getByTestId(GLOBAL_HEADER_TEST_ID)

    expect(renderedGH).toHaveStyle('width: 100%;')
  })

  it('GlobalHeader should have 100vw max width', () => {
    const { getByTestId } = renderGlobalHeader()
    const renderedGH = getByTestId(GLOBAL_HEADER_TEST_ID)

    expect(renderedGH).toHaveStyle('max-width: 100vw;')
  })

  it('GlobalHeader should have 40px height in macOS', () => {
    const { getByTestId } = renderGlobalHeader()
    const renderedGH = getByTestId(GLOBAL_HEADER_TEST_ID)

    expect(renderedGH).toHaveStyle('height: 40px;')
  })

  it('GlobalHeader should have 32px height in Windows', () => {
    const { getByTestId } = renderGlobalHeader({ isWindows: true })
    const renderedGH = getByTestId(GLOBAL_HEADER_TEST_ID)

    expect(renderedGH).toHaveStyle('height: 32px;')
  })
})
