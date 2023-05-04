import React from 'react'

import { isInaccessible } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/testUtils'

import { CheckableAvatar } from './CheckableAvatar'
import { type CheckableAvatarProps } from './CheckableAvatar.types'

const VALUES = ['foo', 'bar', 'baz']

describe('CheckableAvatar', () => {
  const renderCheckableAvatar = ({
    children,
    name = 'foo',
    ...rest
  }: Partial<CheckableAvatarProps> = {}) => render(
    <CheckableAvatar
      name={name}
      {...rest}
    >
      { children }
    </CheckableAvatar>,
  )

  const renderCheckableAvatars = (
    props: Omit<Partial<CheckableAvatarProps>, 'children' | 'name'> = {},
  ) => render(
    <div role="group">
      { VALUES.map(value => (
        <CheckableAvatar
          key={value}
          value={value}
          name={value}
          {...props}
        >
          { value }
        </CheckableAvatar>
      )) }
    </div>,
  )

  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  describe('ARIA', () => {
    it('should be accessible', () => {
      const { container } = renderCheckableAvatar()
      expect(isInaccessible(container)).toBe(false)
    })

    it('should have \'role="checkbox"\' attribute', () => {
      const { getByRole } = renderCheckableAvatar()
      expect(getByRole('checkbox')).toBeInTheDocument()
    })

    it('should be disabled when disabled prop is true', () => {
      const { getByRole } = renderCheckableAvatar({ disabled: true })
      expect(getByRole('checkbox')).toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('User Interactions', () => {
    it('should focus and check checkbox when user clicks on a checkbox', async () => {
      const { getByRole } = renderCheckableAvatar()
      const checkbox = getByRole('checkbox')
      await user.click(checkbox)
      expect(checkbox).toHaveFocus()
      expect(checkbox).toBeChecked()
    })

    it('should focus and check checkbox when user clicks on a label of checkbox', async () => {
      const { getByText, getByRole } = renderCheckableAvatar({ children: 'Label' })
      const checkbox = getByRole('checkbox')
      const label = getByText('Label')
      await user.click(label)
      expect(checkbox).toHaveFocus()
      expect(checkbox).toBeChecked()
    })

    it('should call the checked change event handler when user clicks on a checkbox', async () => {
      const onCheckedChange = jest.fn()
      const { getByRole } = renderCheckableAvatar({ onCheckedChange })
      const checkbox = getByRole('checkbox')
      await user.click(checkbox)
      expect(onCheckedChange).toBeCalledTimes(1)
    })

    it('should focus on the first checkbox item when user presses tab key', async () => {
      const { getByRole } = renderCheckableAvatars()
      const checkbox = getByRole('checkbox', { name: VALUES[0] })
      await user.tab()
      expect(checkbox).toHaveFocus()
    })

    it('should check checkbox when user presses space key on a focused checkbox', async () => {
      const { getByRole } = renderCheckableAvatars()
      const checkbox = getByRole('checkbox', { name: VALUES[0] })
      await user.tab()
      expect(checkbox).toHaveFocus()
      await user.keyboard('{ }')
      expect(checkbox).toHaveFocus()
      expect(checkbox).toBeChecked()
    })

    it('should call the checked change event handler user presses space key on a focused checkbox', async () => {
      const onCheckedChange = jest.fn()
      const { getByRole } = renderCheckableAvatars({ onCheckedChange })
      const checkbox = getByRole('checkbox', { name: VALUES[0] })
      await user.tab()
      expect(checkbox).toHaveFocus()
      await user.keyboard('{ }')
      expect(onCheckedChange).toBeCalledTimes(1)
    })
  })
})
