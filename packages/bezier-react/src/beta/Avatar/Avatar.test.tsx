import * as React from 'react'


import { Status } from '~/src/beta/Status'
import { render } from '~/src/utils/test'

import { Avatar } from './Avatar'
import type { AvatarProps } from './Avatar.types'

import styles from './Avatar.module.scss'


describe('Avatar', () => {
  const mockAvatarUrl = 'https://bit.ly/dan-abramov'
  const mockFallbackUrl = 'https://www.google.com'

  const renderAvatar = (props?: Partial<AvatarProps>) =>
    render(
      <Avatar
        avatarUrl={mockAvatarUrl}
        fallbackUrl={mockFallbackUrl}
        name="Name"
        {...props}
      />
    )

  it('should render with default style', () => {
    const { container } = renderAvatar()
    const avatar = container.firstElementChild

    expect(avatar).toHaveClass(styles.Avatar)
    expect(avatar).toHaveClass(styles['size-24'])
    expect(avatar).toHaveAttribute('data-disabled', 'false')
  })

  it('should render disabled style', () => {
    const { container } = renderAvatar({ disabled: true })
    const avatar = container.firstElementChild

    expect(avatar).toHaveClass(styles.disabled)
    expect(avatar).toHaveAttribute('data-disabled', 'true')
  })

  it('should forward ref to avatar image', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(
      <Avatar
        ref={ref}
        avatarUrl={mockAvatarUrl}
        fallbackUrl={mockFallbackUrl}
        name="Name"
      />
    )

    expect(ref.current).toBeInTheDocument()
    expect(ref.current).toHaveAttribute('aria-description', 'Name')
  })

  it('should render status when status is given', () => {
    const { container } = renderAvatar({ status: 'online-dnd' })
    const icon = container.querySelector('svg')

    expect(icon).toBeInTheDocument()
  })

  it('should render custom status children', () => {
    const { container } = renderAvatar({
      children: (
        <Status
          type="lock"
          size="m"
        />
      ),
    })
    const icon = container.querySelector('svg')

    expect(icon).toBeInTheDocument()
  })
})
