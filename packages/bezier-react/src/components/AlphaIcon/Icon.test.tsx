import { ChannelBtnFilledIcon } from '@channel.io/bezier-icons'
import { render, screen } from '@testing-library/react'

import { Icon } from './Icon'

describe('Icon', () => {
  const renderIcon = (props = {}) =>
    render(
      <Icon
        source={ChannelBtnFilledIcon}
        {...props}
      />
    )

  it('should render', () => {
    renderIcon()
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument()
  })

  describe('Accessibility', () => {
    it('should be decorative by default', () => {
      renderIcon()
      expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
        'aria-hidden',
        'true'
      )
    })

    it('should be accessible with aria-label', () => {
      renderIcon({ 'aria-label': 'Channel Button' })
      expect(screen.getByRole('img')).toHaveAttribute(
        'aria-label',
        'Channel Button'
      )
      expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('should respect explicit aria-hidden', () => {
      renderIcon({ 'aria-hidden': false })
      expect(screen.getByRole('img')).toBeInTheDocument()
    })
  })
})
