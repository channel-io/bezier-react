import { createRef } from 'react'

import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { BaseButton } from './BaseButton'

describe('BaseButton', () => {
  it('should render the button with children', () => {
    const { getByText } = render(<BaseButton>Test Button</BaseButton>)
    expect(getByText('Test Button')).toBeInTheDocument()
  })

  it('should apply custom inline style', () => {
    const { getByText } = render(
      <BaseButton style={{ color: 'red' }}>Test Button</BaseButton>
    )
    expect(getByText('Test Button')).toHaveStyle({ color: 'red' })
  })

  it('should apply custom className', () => {
    const { getByText } = render(
      <BaseButton className="custom-class">Test Button</BaseButton>
    )
    expect(getByText('Test Button')).toHaveClass('custom-class')
  })

  it('should forward ref to the button element', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<BaseButton ref={ref}>Test Button</BaseButton>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('should pass additional props to the button element', async () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <BaseButton onClick={onClick}>Test Button</BaseButton>
    )
    await userEvent.click(getByText('Test Button'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should have type="button" by default', () => {
    const { getByText } = render(<BaseButton>Test Button</BaseButton>)
    expect(getByText('Test Button')).toHaveAttribute('type', 'button')
  })

  it('should be able to change the button type', () => {
    const { getByText } = render(
      <BaseButton type="submit">Submit Button</BaseButton>
    )
    expect(getByText('Submit Button')).toHaveAttribute('type', 'submit')
  })
})
