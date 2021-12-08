/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import Banner, { BANNER_DISMISS_TEST_ID, BANNER_LINK_TEST_ID } from './Banner'
import type { BannerProps } from './Banner.types'

describe('Banner >', () => {
  let props: BannerProps

  beforeEach(() => {
    props = {
      icon: 'info',
      content: 'Lorem ipsum dolor amet.',
      hasLink: false,
      dismissible: false,
    }
  })

  const renderBanner = (otherProps?: Partial<BannerProps>) => render(<Banner {...props} {...otherProps} />)

  it('does not render link if hasLink = false', () => {
    const { queryByTestId } = renderBanner()
    expect(queryByTestId(BANNER_LINK_TEST_ID)).toBeNull()
  })

  it('renders link with correct style', () => {
    const { getByTestId } = renderBanner({ hasLink: true, linkText: 'foo', linkTo: 'https://google.com' })
    const bannerLink = getByTestId(BANNER_LINK_TEST_ID)

    expect(bannerLink.tagName).toBe('A')
    expect(bannerLink.children.item(0)).toHaveStyle('text-decoration: underline;')
    expect(bannerLink.children.item(0)).toHaveStyle('font-weight: bold;')
    expect(bannerLink.children.item(0)).toHaveStyle('font-size: 14px;')
  })

  it('does not render dismiss button if dismissible = false', () => {
    const { queryByTestId } = renderBanner()
    expect(queryByTestId(BANNER_DISMISS_TEST_ID)).toBeNull()
  })
})
