import { PlusIcon } from '@channel.io/bezier-icons'
import userEvent from '@testing-library/user-event'

import { BaseButton } from '~/src/beta/BaseButton'
import { render } from '~/src/utils/test'

import { IconButton } from './IconButton'

describe('IconButton', () => {
  it('should render an accessible icon-only button', () => {
    const { getByRole } = render(
      <IconButton
        content={PlusIcon}
        aria-label="Add"
      />
    )

    expect(getByRole('button', { name: 'Add' })).toBeInTheDocument()
  })

  it('should have type="button" by default', () => {
    const { getByRole } = render(
      <IconButton
        content={PlusIcon}
        aria-label="Add"
      />
    )

    expect(getByRole('button')).toHaveAttribute('type', 'button')
  })

  it('should be able to change the button type', () => {
    const { getByRole } = render(
      <IconButton
        content={PlusIcon}
        aria-label="Submit"
        type="submit"
      />
    )

    expect(getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('should call click event handler when user clicks on a button', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    const { getByRole } = render(
      <IconButton
        content={PlusIcon}
        aria-label="Add"
        onClick={onClick}
      />
    )

    await user.click(getByRole('button', { name: 'Add' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should render as a link when as is anchor', () => {
    const { getByRole } = render(
      <IconButton
        as="a"
        href="/add"
        content={PlusIcon}
        aria-label="Add"
      />
    )

    expect(getByRole('link', { name: 'Add' })).toHaveAttribute('href', '/add')
  })

  it('should render with a custom component when as is provided', () => {
    const { getByRole } = render(
      <IconButton
        as={BaseButton}
        content={PlusIcon}
        aria-label="Add"
      />
    )

    expect(getByRole('button', { name: 'Add' })).toBeInTheDocument()
  })

  it('should prevent anchor activation when disabled', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    const { getByRole } = render(
      <IconButton
        as="a"
        href="/add"
        content={PlusIcon}
        aria-label="Add"
        disabled
        onClick={onClick}
      />
    )

    const link = getByRole('link', { name: 'Add' })

    expect(link).toHaveAttribute('aria-disabled', 'true')
    expect(link).toHaveAttribute('tabindex', '-1')

    await user.click(link)

    expect(onClick).not.toHaveBeenCalled()
  })

  it('should be disabled when disabled prop is true', () => {
    const { getByRole } = render(
      <IconButton
        content={PlusIcon}
        aria-label="Add"
        disabled
      />
    )

    expect(getByRole('button')).toBeDisabled()
  })

  it('should be disabled and busy when loading prop is true', () => {
    const { getByRole } = render(
      <IconButton
        content={PlusIcon}
        aria-label="Add"
        loading
      />
    )

    expect(getByRole('button')).toBeDisabled()
    expect(getByRole('button')).toHaveAttribute('aria-busy', 'true')
  })

  it('should render icon as decorative content', () => {
    const { container } = render(
      <IconButton
        content={PlusIcon}
        aria-label="Add"
      />
    )

    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })
})
