/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import Navigation, { NAV_SCROLL_TEST_ID } from './Navigation'
import NavigationProps from './Navigation.types'

const MIN_WIDTH = 240
const MAX_WIDTH = 540
const NAV_TEST_ID = 'nav-test'

describe('Navigation Test >', () => {
  let props: NavigationProps

  beforeEach(() => {
    props = {
      testId: NAV_TEST_ID,
      minWidth: MIN_WIDTH,
      maxWidth: MAX_WIDTH,
      disableResize: false,
    }
  })

  const renderNavigation = () => render(<Navigation {...props} />)

  it('Navigation should be initialized with mininal width', () => {
    const { getByTestId } = renderNavigation()
    const renderedNav = getByTestId(NAV_TEST_ID)

    expect(renderedNav).toHaveStyle(`width: ${MIN_WIDTH}px`)
  })

  it('Navigation should have 100% height', () => {
    const { getByTestId } = renderNavigation()
    const renderedNav = getByTestId(NAV_TEST_ID)

    expect(renderedNav).toHaveStyle('height: 100%')
  })

  it('Navigation can be scrolled in y-axis', () => {
    const { getByTestId } = renderNavigation()
    const renderedNav = getByTestId(NAV_SCROLL_TEST_ID)

    expect(renderedNav).toHaveStyle('overflow-y: scroll')
  })

  it('Navigation hide overflowed contents on x-axis', () => {
    const { getByTestId } = renderNavigation()
    const renderedNav = getByTestId(NAV_SCROLL_TEST_ID)

    expect(renderedNav).toHaveStyle('overflow-x: hidden')
  })
})
