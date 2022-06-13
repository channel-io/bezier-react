/* External dependencies */
import React from 'react'
import { fireEvent } from '@testing-library/react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import Banner, { BANNER_LINK_TEST_ID } from './Banner'
import type { BannerProps } from './Banner.types'

describe('Banner >', () => {
  let props: BannerProps

  beforeEach(() => {
    props = {
      icon: 'info',
      content: 'Lorem ipsum dolor amet.',
      hasLink: false,
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
    expect(bannerLink.children.item(0)).toHaveStyle('font-weight: 600;')
    expect(bannerLink.children.item(0)).toHaveStyle('font-size: 1.4rem;')
  })

  it('renders action button if actionIcon is correct value', () => {
    const onClickAction = jest.fn()
    const { getByRole } = renderBanner({ actionIcon: 'all', onClickAction })
    const actionButton = getByRole('button')

    fireEvent.click(actionButton)
    expect(onClickAction).toHaveBeenCalled()
  })

  it('does not render action button if actionIcon is nil', () => {
    const { queryByRole } = renderBanner()
    const actionButton = queryByRole('button')

    expect(actionButton).toBeNull()
  })
})
