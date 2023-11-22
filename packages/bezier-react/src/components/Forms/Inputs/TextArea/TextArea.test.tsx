import React from 'react'

import { fireEvent } from '@testing-library/dom'
import { act } from '@testing-library/react'

import { LightFoundation } from '~/src/foundation'

import disabledOpacity from '~/src/constants/DisabledOpacity'
import { render } from '~/src/utils/test'

import { COMMON_IME_CONTROL_KEYS } from '~/src/components/Forms/Inputs/constants/CommonImeControlKeys'

import TextArea, { TEXT_AREA_TEST_ID } from './TextArea'
import type TextAreaProps from './TextArea.types'
import { getTextAreaBgColorSemanticName } from './utils'

// SEE ALSO: https://github.com/Andarist/react-textarea-autosize#how-to-test-it-with-jest-and-react-test-renderer-if-you-need-ref
describe('TextArea 테스트 >', () => {
  let props: TextAreaProps

  beforeEach(() => {
    jest.useFakeTimers()
    props = {}
  })

  const renderComponent = (optionProps?: TextAreaProps) => render(
    <TextArea {...props} {...optionProps} />,
  )

  it('SnapShot 테스트 >', () => {
    const { container } = renderComponent()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('TextArea는 기본 attribute들을 가져야 한다', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(TEXT_AREA_TEST_ID)
    const textareaElement = rendered.getElementsByTagName('textarea')[0]

    expect(textareaElement).not.toHaveAttribute('readOnly')
    expect(textareaElement).not.toHaveAttribute('disabled')
    expect(textareaElement).not.toHaveAttribute('placeholder')
    expect(textareaElement).not.toHaveAttribute('maxRows')
    expect(textareaElement).not.toHaveAttribute('minRows')
  })

  it('placeholder가 주입되었을 때 주입되는 값과 동일한 "placeholder"를 가져야 한다', () => {
    const PLACEHOLDER_TEXT = 'this is placeholder'
    const { getByTestId } = renderComponent({ placeholder: PLACEHOLDER_TEXT })
    const rendered = getByTestId(TEXT_AREA_TEST_ID)
    const textareaElement = rendered.getElementsByTagName('textarea')[0]

    expect(textareaElement).toHaveAttribute('placeholder', PLACEHOLDER_TEXT)
  })

  it('disabled 나 readOnly prop이 주입되었을 때 주입되는 attribute를 가져야 한다', () => {
    const { getByTestId } = renderComponent({ disabled: true, readOnly: true })
    const rendered = getByTestId(TEXT_AREA_TEST_ID)
    const textareaElement = rendered.getElementsByTagName('textarea')[0]
    expect(textareaElement).toHaveAttribute('readOnly')
    expect(textareaElement).toHaveAttribute('disabled')
  })

  it('disabled prop이 주입되었을 때는 root wrapper의 opacity가 0.4이어야 한다', () => {
    const { getByTestId } = renderComponent({ disabled: true })
    const rendered = getByTestId(TEXT_AREA_TEST_ID)
    expect(rendered).toHaveStyle(`opacity: ${disabledOpacity}`)
  })

  it('focus 상태일 때는 그에 맞는 shadow 스타일을 가져야 한다', () => {
    const onFocus = jest.fn()
    const { getByTestId } = renderComponent({ onFocus })
    const rendered = getByTestId(TEXT_AREA_TEST_ID)
    const textareaElement = rendered.getElementsByTagName('textarea')[0]
    act(() => {
      textareaElement.focus()
    })

    jest.advanceTimersByTime(1000)
    // eslint-disable-next-line max-len
    expect(rendered).toHaveStyle(`box-shadow: 0 0 0 3px ${LightFoundation.theme['bgtxt-blue-light']}, inset 0 0 0 1px ${LightFoundation.theme['bgtxt-blue-normal']}`)
  })

  it('error 상태일 때는 그에 맞는 shadow 스타일을 가져야 한다', () => {
    const onFocus = jest.fn()
    const { getByTestId } = renderComponent({ onFocus, hasError: true })
    const rendered = getByTestId(TEXT_AREA_TEST_ID)

    jest.advanceTimersByTime(1000)
    // eslint-disable-next-line max-len
    expect(rendered).toHaveStyle(`box-shadow: 0 0 0 3px ${LightFoundation.theme['bgtxt-orange-light']}, inset 0 0 0 1px ${LightFoundation.theme['bgtxt-orange-normal']}`)
  })

  describe('onFocus 테스트 >', () => {
    it('readOnly가 주입됐다면 onFocus 가 안 불려야 한다', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus, readOnly: true })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]
      act(() => {
        textareaElement.focus()
      })

      expect(onFocus).not.toBeCalled()
    })

    it('disabled가 주입됐다면 onFocus 가 안 불려야 한다', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus, disabled: true })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]
      act(() => {
        textareaElement.focus()
      })

      expect(onFocus).not.toBeCalled()
    })

    it('disabled, readOnly가 주입됐다면 onFocus 가 안 불려야 한다', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus, disabled: true, readOnly: true })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]
      act(() => {
        textareaElement.focus()
      })

      expect(onFocus).not.toBeCalled()
    })

    it('readOnly, disabled 가 주입되지 않았다면 onFocus는 불려야 한다', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]
      act(() => {
        textareaElement.focus()
      })

      expect(onFocus).toBeCalled()
    })
  })

  describe('onChange 테스트 >', () => {
    it('정상적인 상황에서 잘 불린다', () => {
      const onChange = jest.fn()
      const { getByTestId } = renderComponent({ onChange })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]

      act(() => {
        fireEvent.change(textareaElement, { target: { value: 'test' } })
      })

      expect(onChange).toBeCalled()
    })
  })

  describe('onBlur 테스트 >', () => {
    it('정상적인 상황에서 잘 불린다', () => {
      const onBlur = jest.fn()
      const { getByTestId } = renderComponent({ onBlur })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]
      act(() => {
        textareaElement.focus()
        textareaElement.blur()
      })
      expect(onBlur).toBeCalled()
    })
  })

  describe('autoFocus 테스트 >', () => {
    it('autoFocus를 주입하면 focus 상태로 되어야 한다', () => {
      const { getByTestId } = renderComponent({ autoFocus: true })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]

      expect(textareaElement).toEqual(document.activeElement)
    })

    it('selection 이 가장 끝에 위치하여야 한다', () => {
      const TEST_INITIAL_VALUE = 'test value'
      const { getByTestId } = renderComponent({ autoFocus: true, value: TEST_INITIAL_VALUE })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]
      expect(textareaElement.selectionEnd).toEqual(TEST_INITIAL_VALUE.length)
    })
  })

  describe('Keyboard event handlers for common ime control keys should not be called while composing ', () => {
    it('onKeyDown', () => {
      const onKeyDown = jest.fn()
      const { getByTestId } = renderComponent({ onKeyDown })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]

      COMMON_IME_CONTROL_KEYS.forEach((key) => {
        const isCompositionStartFired = fireEvent.compositionStart(textareaElement)
        fireEvent.keyDown(textareaElement, { key, isComposing: isCompositionStartFired })
        expect(onKeyDown).not.toBeCalled()
      })
    })

    it('onKeyUp', () => {
      const onKeyUp = jest.fn()
      const { getByTestId } = renderComponent({ onKeyUp })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]

      COMMON_IME_CONTROL_KEYS.forEach((key) => {
        const isCompositionStartFired = fireEvent.compositionStart(textareaElement)
        fireEvent.keyUp(textareaElement, { key, isComposing: isCompositionStartFired })
        expect(onKeyUp).not.toBeCalled()
      })
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
