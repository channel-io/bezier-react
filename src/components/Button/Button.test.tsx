/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import Button, { BUTTON_TEST_ID } from './Button'
import { ButtonProps } from './Button.types'

describe('Button Test >', () => {
  let props: ButtonProps

  beforeEach(() => {
    props = {
      // eslint-disable-next-line no-console
      onClick: () => console.log('button'),
    }
  })

  const renderButton = (optionProps?: ButtonProps) => render(<Button {...props} {...optionProps}/>)

  it('Button has default style', () => {
    const { getByTestId } = renderButton()

    const renderedButton = getByTestId(BUTTON_TEST_ID)

    expect(renderedButton).toHaveStyle('height: 34px;')
    expect(renderedButton).toHaveStyle('min-width: 70px;')
    expect(renderedButton).toHaveStyle('padding: 8px 22px;')
  })
})
