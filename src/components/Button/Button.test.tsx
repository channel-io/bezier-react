/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import Button from './Button'
import { ButtonProps } from './Button.types'

describe('Button', () => {
  let props: ButtonProps

  beforeEach(() => {
    props = {
      onClick: () => console.log('button'),
    }
  })

  const renderComponent = () => render(<Button {...props} />)

  it("Button 테스트", () => {
    const { getByTestId } = renderComponent()

    const testComponent = getByTestId('button')

    expect(testComponent).toHaveStyle('color: red')
  })
})
