import React from 'react'

import { render } from '~/src/utils/test'

import {
  FORM_ERROR_MESSAGE_TEST_ID,
  FORM_HELPER_TEXT_TEST_ID,
  FormErrorMessage,
  FormHelperText,
} from './FormHelperText'
import type {
  FormErrorMessageProps,
  FormHelperTextProps,
} from './FormHelperText.types'

describe('FormHelperText >', () => {
  let props: FormHelperTextProps
  const text = 'Lorem ipsum'

  beforeEach(() => {
    props = {
      id: 'test',
      children: text,
    }
  })

  const renderFormHelperText = (otherProps?: Partial<FormHelperTextProps>) =>
    render(
      <FormHelperText
        {...props}
        {...otherProps}
      />
    )

  it('Snapshot >', () => {
    const { getByTestId } = renderFormHelperText()
    const helperText = getByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toMatchSnapshot()
  })

  it('renders text when children prop is not empty', () => {
    const { getByTestId } = renderFormHelperText()
    const helperText = getByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toBeInTheDocument()
  })

  it('renders nothing when children prop is empty', () => {
    const { queryByTestId } = renderFormHelperText({ children: '' })
    const helperText = queryByTestId(FORM_HELPER_TEXT_TEST_ID)

    expect(helperText).toBeNull()
  })
})

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
    render(
      <FormErrorMessage
        {...props}
        {...otherProps}
      />
    )

  it('Snapshot >', () => {
    const { getByTestId } = renderFormHelperText()
    const rendered = getByTestId(FORM_ERROR_MESSAGE_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })

  it('renders text when children prop is not empty', () => {
    const { getByTestId } = renderFormHelperText()
    const rendered = getByTestId(FORM_ERROR_MESSAGE_TEST_ID)

    expect(rendered).toBeInTheDocument()
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
