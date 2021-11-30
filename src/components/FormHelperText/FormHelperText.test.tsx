/* External dependencies */
import React from 'react'
import { within } from '@testing-library/dom'

/* Internal dependencies */
import { LightFoundation } from '../../foundation'
import { render } from '../../utils/testUtils'
import FormHelperText, { FORM_HELPER_TEXT_TEST_ID } from './FormHelperText'
import type FormHelperTextProps from './FormHelperText.types'

describe('FormHelperText >', () => {
  let props: FormHelperTextProps
  const description = 'Description'
  const errorMessage = 'Error'

  beforeEach(() => {
    props = {
      id: 'test',
      children: description,
      errorMessage: '',
    }
  })

  const renderFormHelperText = (otherProps?: Partial<FormHelperTextProps>) =>
    render(<FormHelperText {...props} {...otherProps} />)

  it('Snapshot >', () => {
    const { getByTestId } = renderFormHelperText()
    const helperText = getByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toMatchSnapshot()
  })

  it('has vertical padding', () => {
    const { getByTestId } = renderFormHelperText()
    const helperText = getByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toHaveStyle('padding: 0 2px')
  })

  it('has top margin', () => {
    const { getByTestId } = renderFormHelperText()
    const helperText = getByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toHaveStyle('margin-top: 4px')
  })

  it('renders description with correct style when description prop is not empty and errorMessage prop is empty', () => {
    const { getByTestId } = renderFormHelperText()
    const helperText = getByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toHaveStyle(`color: ${LightFoundation.theme['txt-black-dark']}`)

    const { getByText } = within(helperText)

    expect(getByText(description)).toBeInTheDocument()
  })

  it('renders errorMessage with correct style when errorMessage prop is not empty', () => {
    const { getByTestId } = renderFormHelperText({ errorMessage })
    const helperText = getByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-orange-normal']}`)

    const { queryByText } = within(helperText)

    expect(queryByText(description)).not.toBeInTheDocument()
    expect(queryByText(errorMessage)).toBeInTheDocument()
  })

  it('renders nothing when description and errorMessage prop is empty', () => {
    const { queryByTestId } = renderFormHelperText({ children: '', errorMessage: '' })
    const helperText = queryByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toBeNull()
  })
})
