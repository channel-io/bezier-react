import { PlusIcon } from '@channel.io/bezier-icons'
import userEvent from '@testing-library/user-event'

import { BaseButton } from '~/src/beta/BaseButton'
import { render } from '~/src/utils/test'

import { Button } from './Button'

describe('Button', () => {
  it('should render label', () => {
    const { getByRole } = render(<Button label="Button" />)

    expect(getByRole('button', { name: 'Button' })).toBeInTheDocument()
  })

  it('should have type="button" by default', () => {
    const { getByRole } = render(<Button label="Button" />)

    expect(getByRole('button')).toHaveAttribute('type', 'button')
  })

  it('should be able to change the button type', () => {
    const { getByRole } = render(
      <Button
        label="Submit"
        type="submit"
      />
    )

    expect(getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('should call click event handler when user clicks on a button', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    const { getByRole } = render(
      <Button
        label="Button"
        onClick={onClick}
      />
    )

    await user.click(getByRole('button', { name: 'Button' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should render as a link when as is anchor', () => {
    const { getByRole } = render(
      <Button
        as="a"
        href="/settings"
        label="Settings"
      />
    )

    expect(getByRole('link', { name: 'Settings' })).toHaveAttribute(
      'href',
      '/settings'
    )
  })

  it('should render with a custom component when as is provided', () => {
    const { getByRole } = render(
      <Button
        as={BaseButton}
        label="Custom"
      />
    )

    expect(getByRole('button', { name: 'Custom' })).toBeInTheDocument()
  })

  it('should prevent anchor activation when disabled', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    const { getByRole } = render(
      <Button
        as="a"
        href="/settings"
        label="Settings"
        disabled
        onClick={onClick}
      />
    )

    const link = getByRole('link', { name: 'Settings' })

    expect(link).toHaveAttribute('aria-disabled', 'true')
    expect(link).toHaveAttribute('tabindex', '-1')

    await user.click(link)

    expect(onClick).not.toHaveBeenCalled()
  })

  it('should be disabled when disabled prop is true', () => {
    const { getByRole } = render(
      <Button
        label="Button"
        disabled
      />
    )

    expect(getByRole('button')).toBeDisabled()
  })

  it('should be disabled and busy when loading prop is true', () => {
    const { getByRole } = render(
      <Button
        label="Button"
        loading
      />
    )

    expect(getByRole('button')).toBeDisabled()
    expect(getByRole('button')).toHaveAttribute('aria-busy', 'true')
  })

  it('should render leading and trailing icons as decorative content', () => {
    const { container } = render(
      <Button
        label="Button"
        leadingContent={PlusIcon}
        trailingContent={PlusIcon}
      />
    )

    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(2)
  })
})
