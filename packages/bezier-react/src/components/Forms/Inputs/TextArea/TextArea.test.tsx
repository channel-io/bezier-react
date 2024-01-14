import React from 'react'

import { fireEvent } from '@testing-library/dom'
import { act } from '@testing-library/react'

import { render } from '~/src/utils/test'

import { COMMON_IME_CONTROL_KEYS } from '~/src/components/Forms/Inputs/constants/CommonImeControlKeys'

import {
  TEXT_AREA_TEST_ID,
  TextArea,
} from './TextArea'
import type { TextAreaProps } from './TextArea.types'

describe('TextArea', () => {
  let props: TextAreaProps

  beforeEach(() => {
    jest.useFakeTimers()
    props = {}
  })

  const renderComponent = (optionProps?: TextAreaProps) => render(
    <TextArea {...props} {...optionProps} />,
  )

  it('should have the default attributes', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(TEXT_AREA_TEST_ID)
    const textareaElement = rendered.getElementsByTagName('textarea')[0]

    expect(textareaElement).not.toHaveAttribute('readOnly')
    expect(textareaElement).not.toHaveAttribute('disabled')
    expect(textareaElement).not.toHaveAttribute('placeholder')
    expect(textareaElement).not.toHaveAttribute('maxRows')
    expect(textareaElement).not.toHaveAttribute('minRows')
  })

  it('should have the same "placeholder" as the injected value when a placeholder is provided', () => {
    const PLACEHOLDER_TEXT = 'this is placeholder'
    const { getByTestId } = renderComponent({ placeholder: PLACEHOLDER_TEXT })
    const rendered = getByTestId(TEXT_AREA_TEST_ID)
    const textareaElement = rendered.getElementsByTagName('textarea')[0]

    expect(textareaElement).toHaveAttribute('placeholder', PLACEHOLDER_TEXT)
  })

  it('should have the injected attributes when "disabled" or "readOnly" props are provided', () => {
    const { getByTestId } = renderComponent({ disabled: true, readOnly: true })
    const rendered = getByTestId(TEXT_AREA_TEST_ID)
    const textareaElement = rendered.getElementsByTagName('textarea')[0]
    expect(textareaElement).toHaveAttribute('readOnly')
    expect(textareaElement).toHaveAttribute('disabled')
  })

  describe('onFocus', () => {
    it('should not trigger when disabled', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus, disabled: true })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]
      act(() => {
        textareaElement.focus()
      })

      expect(onFocus).not.toHaveBeenCalled()
    })

    it('should trigger when not disabled', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]
      act(() => {
        textareaElement.focus()
      })

      expect(onFocus).toHaveBeenCalled()
    })
  })

  describe('onChange', () => {
    it('should trigger correctly under normal circumstances', () => {
      const onChange = jest.fn()
      const { getByTestId } = renderComponent({ onChange })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]

      act(() => {
        fireEvent.change(textareaElement, { target: { value: 'test' } })
      })

      expect(onChange).toHaveBeenCalled()
    })
  })

  describe('onBlur', () => {
    it('should trigger correctly under normal circumstances', () => {
      const onBlur = jest.fn()
      const { getByTestId } = renderComponent({ onBlur })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]
      act(() => {
        textareaElement.focus()
        textareaElement.blur()
      })
      expect(onBlur).toHaveBeenCalled()
    })
  })

  describe('autoFocus', () => {
    it('should be in focus state when autoFocus is provided', () => {
      const { getByTestId } = renderComponent({ autoFocus: true })
      const rendered = getByTestId(TEXT_AREA_TEST_ID)
      const textareaElement = rendered.getElementsByTagName('textarea')[0]

      expect(textareaElement).toEqual(document.activeElement)
    })

    it('should place the selection at the end', () => {
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
        expect(onKeyDown).not.toHaveBeenCalled()
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
        expect(onKeyUp).not.toHaveBeenCalled()
      })
    })
  })
})
