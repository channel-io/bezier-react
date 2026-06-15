import { AllIcon, InfoIcon } from '@channel.io/bezier-icons'
import { fireEvent } from '@testing-library/react'

import { render } from '~/src/utils/test'

import { Banner } from './Banner'
import type { BannerProps } from './Banner.types'

describe('Banner', () => {
  let props: BannerProps

  beforeEach(() => {
    props = {
      leadingIcon: InfoIcon,
      content: 'Lorem ipsum dolor amet.',
      hasLink: false,
    }
  })

  const renderBanner = (otherProps?: Partial<BannerProps>) =>
    render(
      <Banner
        {...props}
        {...otherProps}
      />
    )

  it('does not render link if hasLink = false', () => {
    const { queryByRole } = renderBanner()
    expect(queryByRole('link')).toBeNull()
  })

  it('renders link if hasLink = true', () => {
    const { getByRole } = renderBanner({
      hasLink: true,
      linkText: 'foo',
      linkTo: 'https://google.com',
    })
    const link = getByRole('link', { name: 'foo' })

    expect(link).toHaveAttribute('href', 'https://google.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders custom link if renderLink is provided', () => {
    const renderLink = jest.fn(({ content, linkTo }) => (
      <button
        type="button"
        data-link-to={linkTo}
      >
        {content}
      </button>
    ))

    const { getByRole } = renderBanner({
      hasLink: true,
      linkText: 'foo',
      linkTo: 'custom-link',
      renderLink,
    })

    expect(renderLink).toHaveBeenCalledWith({
      content: expect.anything(),
      linkTo: 'custom-link',
    })
    expect(getByRole('button', { name: 'foo' })).toHaveAttribute(
      'data-link-to',
      'custom-link'
    )
  })

  it('renders action button if actionIcon is correct value', () => {
    const onClickAction = jest.fn()
    const { getByRole } = renderBanner({ actionIcon: AllIcon, onClickAction })
    const actionButton = getByRole('button', { name: 'Close' })

    fireEvent.click(actionButton)
    expect(onClickAction).toHaveBeenCalled()
  })

  it('does not render action button if actionIcon is nil', () => {
    const { queryByRole } = renderBanner()
    const actionButton = queryByRole('button')

    expect(actionButton).toBeNull()
  })

  it('does not render leading icon if leadingIcon is null', () => {
    const { container } = renderBanner({ leadingIcon: null })
    expect(container.querySelector('svg')).toBeNull()
  })

  it('forwards HTML attributes to the root element', () => {
    const { container } = renderBanner({
      className: 'custom-class',
      id: 'banner',
    })
    const banner = container.querySelector('#banner')

    expect(banner).toHaveClass('custom-class')
  })
})
