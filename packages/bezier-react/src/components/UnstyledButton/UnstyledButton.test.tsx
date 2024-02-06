import React from 'react'

import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { UnstyledButton } from './UnstyledButton'

describe('UnstyledButton', () => {
  it('should render the button with children', () => {
    const { getByText } = render(<UnstyledButton>Test Button</UnstyledButton>)
    expect(getByText('Test Button')).toBeInTheDocument()
  })

  it('should apply custom inline style', () => {
    const { getByText } = render(<UnstyledButton style={{ color: 'red' }}>Test Button</UnstyledButton>)
    expect(getByText('Test Button')).toHaveStyle({ color: 'red' })
  })

  it('should apply custom className', () => {
    const { getByText } = render(<UnstyledButton className="custom-class">Test Button</UnstyledButton>)
    expect(getByText('Test Button')).toHaveClass('custom-class')
  })

  it('should forward ref to the button element', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<UnstyledButton ref={ref}>Test Button</UnstyledButton>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('should pass additional props to the button element', async () => {
    const onClick = jest.fn()
    const { getByText } = render(<UnstyledButton onClick={onClick}>Test Button</UnstyledButton>)
    await userEvent.click(getByText('Test Button'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should have type="button" by default', () => {
    const { getByText } = render(<UnstyledButton>Test Button</UnstyledButton>)
    expect(getByText('Test Button')).toHaveAttribute('type', 'button')
  })

  it('should be able to change the button type', () => {
    const { getByText } = render(<UnstyledButton type="submit">Submit Button</UnstyledButton>)
    expect(getByText('Submit Button')).toHaveAttribute('type', 'submit')
  })
})
