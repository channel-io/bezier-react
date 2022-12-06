/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import { FormHelperText, FormErrorMessage } from './FormHelperText'
import type { FormHelperTextProps, FormErrorMessageProps } from './FormHelperText.types'

describe('FormHelperText', () => {
  let props: FormHelperTextProps
  const text = 'Lorem ipsum'

  beforeEach(() => {
    props = {
      id: 'test',
      children: text,
    }
  })

  const renderFormHelperText = (otherProps?: Partial<FormHelperTextProps>) =>
    render(<FormHelperText {...props} {...otherProps} />)

  it('Snapshot', () => {
    const { getByText } = renderFormHelperText()
    const helperText = getByText(text)
    expect(helperText).toMatchSnapshot()
  })

  it('renders text with correct style when children prop is not empty', () => {
    const { getByText } = renderFormHelperText()
    const helperText = getByText(text)
    expect(helperText).toHaveStyle('--bezier-text-font-color: var(--txt-black-dark);')
  })

  it('renders nothing when children prop is empty', () => {
    const { queryByTestId } = renderFormHelperText({ children: '' })
    const helperText = queryByTestId(text)
    expect(helperText).toBeNull()
  })
})

describe('FormErrorMessage', () => {
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

  it('Snapshot', () => {
    const { getByText } = renderFormHelperText()
    const rendered = getByText(text)
    expect(rendered).toMatchSnapshot()
  })

  it('renders text with correct style when children prop is not empty', () => {
    const { getByText } = renderFormHelperText()
    const rendered = getByText(text)
    expect(rendered).toHaveStyle('--bezier-text-font-color: var(--bgtxt-orange-normal);')
  })

  it('renders nothing when children prop is empty', () => {
    const { queryByTestId } = renderFormHelperText({ children: '' })
    const rendered = queryByTestId(text)
    expect(rendered).toBeNull()
  })

  it('should have aria-live="polite" attribute', () => {
    const { getByText } = renderFormHelperText()
    const rendered = getByText(text)
    expect(rendered).toHaveAttribute('aria-live', 'polite')
  })
})

