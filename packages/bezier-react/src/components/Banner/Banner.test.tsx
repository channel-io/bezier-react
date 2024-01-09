import React from 'react'

import {
  AllIcon,
  InfoIcon,
} from '@channel.io/bezier-icons'
import { fireEvent } from '@testing-library/react'

import { render } from '~/src/utils/test'

import { Banner } from './Banner'
import type { BannerProps } from './Banner.types'

describe('Banner', () => {
  let props: BannerProps

  beforeEach(() => {
    props = {
      icon: InfoIcon,
      content: 'Lorem ipsum dolor amet.',
      hasLink: false,
    }
  })

  const renderBanner = (otherProps?: Partial<BannerProps>) => render(<Banner {...props} {...otherProps} />)

  it('does not render link if hasLink = false', () => {
    const { queryByRole } = renderBanner()
    expect(queryByRole('link')).toBeNull()
  })

  it('renders link if hasLink = true', () => {
    const { queryByRole } = renderBanner({ hasLink: true, linkText: 'foo', linkTo: 'https://google.com' })
    expect(queryByRole('link')).toBeInTheDocument()
  })

  it('renders action button if actionIcon is correct value', () => {
    const onClickAction = jest.fn()
    const { getByRole } = renderBanner({ actionIcon: AllIcon, onClickAction })
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
