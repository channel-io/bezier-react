/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '../../../utils/testUtils'
import TextArea, { TEXT_AREA_TEST_ID } from './TextArea'
import { TextAreaProps } from './TextArea.types'
import { getTextAreaBgColorSemanticName } from './utils'

// SEE ALSO: https://github.com/Andarist/react-textarea-autosize#how-to-test-it-with-jest-and-react-test-renderer-if-you-need-ref
describe('TextArea 테스트 >', () => {
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

describe('TextArea util test >', () => {
  describe('getTextAreaBgColorSemanticNames 테스트', () => {
    it('readOnly 이면 다른 값이 무엇이든 bg-grey-lighter를 반환한다.', () => {
      const result1 = getTextAreaBgColorSemanticName({
        focused: true,
        hasError: true,
        readOnly: true,
      })

      const result2 = getTextAreaBgColorSemanticName({
        focused: false,
        hasError: false,
        readOnly: true,
      })

      expect(result1).toBe('bg-grey-lighter')
      expect(result2).toBe('bg-grey-lighter')
    })

    it('!readOnly이고, focused이거나 hasError이면 bg-white-normal을 반환한다', () => {
      const result1 = getTextAreaBgColorSemanticName({
        focused: true,
        hasError: false,
        readOnly: false,
      })

      const result2 = getTextAreaBgColorSemanticName({
        focused: false,
        hasError: true,
        readOnly: false,
      })

      expect(result1).toBe('bg-white-normal')
      expect(result2).toBe('bg-white-normal')
    })

    it('모두 아니면 bg-grey-lightest를 반환한다', () => {
      const result1 = getTextAreaBgColorSemanticName({
        focused: false,
        hasError: false,
        readOnly: false,
      })

      expect(result1).toBe('bg-grey-lightest')
    })
  })
})
