/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '../../utils/testUtils'
import Button from './Button'
import type ButtonProps from './Button.types'

describe('Button', () => {
  let props: ButtonProps

  beforeEach(() => {
    props = {
      // eslint-disable-next-line no-console
      onClick: () => console.log('button'),
    }
  })

  const renderComponent = () => render(<Button {...props} />)

  it('Button 테스트', () => {
    const { getByTestId } = renderComponent()

    const testComponent = getByTestId('button')

    expect(testComponent).toHaveStyle('border: none;')
  })
})
