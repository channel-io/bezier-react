/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { LightFoundation } from 'Foundation'
import { render } from 'Utils/testUtils'
import FormErrorMessage, { FORM_ERROR_MESSAGE_TEST_ID } from './FormErrorMessage'
import type FormErrorMessageProps from './FormErrorMessage.types'

describe('FormErrorMessage >', () => {
  let props: FormErrorMessageProps
  const text = 'Lorem ipsum'

  beforeEach(() => {
    props = {
      id: 'test',
      children: text,
    }
  })

  const renderFormHelperText = (otherProps?: Partial<FormErrorMessageProps>) =>
    render(<FormErrorMessage {...props} {...otherProps} />)

  it('Snapshot >', () => {
    const { getByTestId } = renderFormHelperText()
    const rendered = getByTestId(FORM_ERROR_MESSAGE_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })

  it('renders text with correct style when children prop is not empty', () => {
    const { getByTestId } = renderFormHelperText()
    const rendered = getByTestId(FORM_ERROR_MESSAGE_TEST_ID)

    expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-orange-normal']}`)
  })

  it('renders nothing when children prop is empty', () => {
    const { queryByTestId } = renderFormHelperText({ children: '' })
    const rendered = queryByTestId(FORM_ERROR_MESSAGE_TEST_ID)

    expect(rendered).toBeNull()
  })

  it('should have aria-live="polite" attribute', () => {
    const { getByTestId } = renderFormHelperText()
    const rendered = getByTestId(FORM_ERROR_MESSAGE_TEST_ID)

    expect(rendered).toHaveAttribute('aria-live', 'polite')
  })
})
