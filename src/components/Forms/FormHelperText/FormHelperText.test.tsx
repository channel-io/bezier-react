/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { LightFoundation } from 'Foundation'
import { render } from 'Utils/testUtils'
import FormHelperText, { FORM_HELPER_TEXT_TEST_ID } from './FormHelperText'
import type FormHelperTextProps from './FormHelperText.types'

describe('FormHelperText >', () => {
  let props: FormHelperTextProps
  const text = 'Lorem ipsum'

  beforeEach(() => {
    props = {
      id: 'test',
      hasError: false,
      children: text,
    }
  })

  const renderFormHelperText = (otherProps?: Partial<FormHelperTextProps>) =>
    render(<FormHelperText {...props} {...otherProps} />)

  it('Snapshot >', () => {
    const { getByTestId } = renderFormHelperText()
    const helperText = getByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toMatchSnapshot()
  })

  it('renders text with correct style when children prop is not empty', () => {
    const { getByTestId } = renderFormHelperText()
    const helperText = getByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toHaveStyle(`color: ${LightFoundation.theme['txt-black-dark']}`)
  })

  it('renders error style text with correct style when hasError prop is true', () => {
    const { getByTestId } = renderFormHelperText({ hasError: true })
    const helperText = getByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-orange-normal']}`)
  })

  it('renders nothing when children prop is empty', () => {
    const { queryByTestId } = renderFormHelperText({ children: '' })
    const helperText = queryByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toBeNull()
  })
})
