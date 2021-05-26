/* External dependencies */
import { fireEvent } from '@testing-library/dom'
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

  it('TextArea는 기본 attribute들을 가져야 한다', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(TEXT_AREA_TEST_ID)
    const textareaElement = rendered.getElementsByTagName('textarea')[0]

    expect(textareaElement).not.toHaveAttribute('disabled')
    expect(textareaElement).not.toHaveAttribute('placeholder')
    expect(textareaElement).not.toHaveAttribute('maxRows')
  })

  it('placeholder가 주입되었을 때 주입되는 값과 동일한 "placeholder"를 가져야 한다', () => {
    const PLACEHOLDER_TEXT = 'this is placeholder'
    const { getByTestId } = renderComponent({ placeholder: PLACEHOLDER_TEXT })
    const rendered = getByTestId(TEXT_AREA_TEST_ID)
    const textareaElement = rendered.getElementsByTagName('textarea')[0]

    expect(textareaElement).toHaveAttribute('placeholder', PLACEHOLDER_TEXT)
  })

  describe('onFocus 테스트 >', () => {
    it('readOnly 이면 onFocus 가 안 불려야 한다', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus, readOnly: true })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]
      textareaElement.focus()

      expect(onFocus).not.toBeCalled()
    })

    it('readOnly 가 주입되지 않았다면 onFocus는 불려야 한다', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]
      textareaElement.focus()

      expect(onFocus).toBeCalled()
    })
  })

  describe('onChange 테스트 >', () => {
    it('정상적인 상황에서 잘 불린다', () => {
      const onChange = jest.fn()
      const { getByTestId } = renderComponent({ onChange })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]

      fireEvent.change(textareaElement, { target: { value: 'test' } })
      expect(onChange).toBeCalled()
    })
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
