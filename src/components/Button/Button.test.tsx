/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '../../utils/testUtils'
import Button, { BUTTON_TEST_ID } from './Button'
import type ButtonProps from './Button.types'

describe('Button Test >', () => {
  let props: ButtonProps

  beforeEach(() => {
    props = {
      // eslint-disable-next-line no-console
      onClick: () => console.log('button'),
    }
  })

  const renderButton = (optionProps?: ButtonProps) => render(<Button {...props} {...optionProps}/>)

  it('Button has 34px height', () => {
    const { getByTestId } = renderButton()

    const renderedButton = getByTestId(BUTTON_TEST_ID)

    expect(renderedButton).toHaveStyle('border: none;')
  })
})
