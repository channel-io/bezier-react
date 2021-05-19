/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '../../../utils/testUtils'
import TextArea, { TEXT_AREA_TEST_ID } from './TextArea'
import { TextAreaProps } from './TextArea.types'

// TEST CODE 강화 필요
// SEE ALSO: https://github.com/Andarist/react-textarea-autosize#how-to-test-it-with-jest-and-react-test-renderer-if-you-need-ref
describe('TextArea', () => {
  let props: TextAreaProps

  beforeEach(() => {
    props = {}
  })

  const renderComponent = (optionProps?: TextAreaProps) => render(
    <TextArea {...props} {...optionProps} />,
  )

  it('TextArea have default attribute', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(TEXT_AREA_TEST_ID)
    const inputElement = rendered.getElementsByTagName('textarea')[0]
    expect(inputElement).not.toHaveAttribute('disabled')
    expect(inputElement).not.toHaveAttribute('placeholder')
    expect(inputElement).not.toHaveAttribute('maxRows')
  })

  it('should have "placeholder" attribute when "placeholder" props is "true"', () => {
    const { getByTestId } = renderComponent({ placeholder: 'this is placeholder' })
    const rendered = getByTestId(TEXT_AREA_TEST_ID)
    const inputElement = rendered.getElementsByTagName('textarea')[0]
    expect(inputElement).toHaveAttribute('placeholder', 'this is placeholder')
  })
})
