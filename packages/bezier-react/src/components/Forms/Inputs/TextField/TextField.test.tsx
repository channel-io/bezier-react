import React from 'react'

import { fireEvent } from '@testing-library/dom'
import { act } from '@testing-library/react'

import { LightFoundation } from '~/src/foundation'

import { render } from '~/src/utils/testUtils'

import { COMMON_IME_CONTROL_KEYS } from '~/src/components/Forms/Inputs/constants/CommonImeControlKeys'

import TextField, { TEXT_INPUT_TEST_ID } from './TextField'
import {
  type TextFieldProps,
  TextFieldVariant,
} from './TextField.types'
import { getProperTextFieldBgColor } from './TextFieldUtils'

describe('TextField', () => {
  let props: TextFieldProps

  beforeEach(() => {
    props = {}
  })

  const renderComponent = (optionProps?: TextFieldProps) => render(
    <TextField {...props} {...optionProps} />,
  )

  it('TextField have default attribute', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    const inputElement = rendered.getElementsByTagName('input')[0]
    expect(inputElement).not.toHaveAttribute('disabled')
    expect(inputElement).not.toHaveAttribute('readOnly')
    expect(inputElement).not.toHaveAttribute('placeholder')
    expect(inputElement).not.toHaveAttribute('maxLength')
  })

  it('should have "disabled" attribute when "disabled" props is "true"', () => {
    const { getByTestId } = renderComponent({ disabled: true })
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    const inputElement = rendered.getElementsByTagName('input')[0]
    expect(inputElement).toHaveAttribute('disabled')
  })

  it('should have "readOnly" attribute when "readOnly" props is "true"', () => {
    const { getByTestId } = renderComponent({ readOnly: true })
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    const inputElement = rendered.getElementsByTagName('input')[0]
    expect(inputElement).toHaveAttribute('readOnly')
  })

  it('should have "placeholder" attribute when "placeholder" props is "true"', () => {
    const { getByTestId } = renderComponent({ placeholder: 'this is placeholder' })
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    const inputElement = rendered.getElementsByTagName('input')[0]
    expect(inputElement).toHaveAttribute('placeholder', 'this is placeholder')
  })

  it('should have "maxLength" attribute when "maxLength" props is "true"', () => {
    const { getByTestId } = renderComponent({ maxLength: 5 })
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    const inputElement = rendered.getElementsByTagName('input')[0]
    expect(inputElement).toHaveAttribute('maxLength', '5')
  })

  it('sholud return the correct background-color according to the state.', () => {
    expect(getProperTextFieldBgColor({
      variant: TextFieldVariant.Primary,
      focused: false,
      hasError: false,
      readOnly: false,
    })).toBe('bg-grey-lightest')

    expect(getProperTextFieldBgColor({
      variant: TextFieldVariant.Primary,
      focused: true,
      hasError: false,
      readOnly: false,
    })).toBe('bg-white-normal')

    expect(getProperTextFieldBgColor({
      variant: TextFieldVariant.Primary,
      focused: false,
      hasError: true,
      readOnly: false,
    })).toBe('bg-white-normal')

    expect(getProperTextFieldBgColor({
      variant: TextFieldVariant.Primary,
      focused: false,
      hasError: false,
      readOnly: true,
    })).toBe('bg-grey-lighter')
  })

  it('should have default style when have no props.', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    expect(rendered).toHaveStyle(`background-color: ${LightFoundation.theme['bg-grey-lightest']}`)
    // eslint-disable-next-line max-len
    expect(rendered).toHaveStyle(`box-shadow: 0 1px 2px ${LightFoundation.theme['bg-black-lighter']}, inset 0 0 0 1px ${LightFoundation.theme['bg-black-dark']}`)
  })

  it('should have error style when "hasError" props is "true"', () => {
    const { getByTestId } = renderComponent({ hasError: true })
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    expect(rendered).toHaveStyle(`background-color: ${LightFoundation.theme['bg-white-normal']}`)
    // eslint-disable-next-line max-len
    expect(rendered).toHaveStyle(`box-shadow: 0 0 0 3px ${LightFoundation.theme['bgtxt-orange-light']}, inset 0 0 0 1px ${LightFoundation.theme['bgtxt-orange-normal']}`)
  })

  it('should have focused style when "input" focused', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    act(() => {
      rendered.getElementsByTagName('input')[0].focus()
    })
    expect(rendered).toHaveStyle(`background-color: ${LightFoundation.theme['bg-white-normal']}`)
    // eslint-disable-next-line max-len
    expect(rendered).toHaveStyle(`box-shadow: 0 0 0 3px ${LightFoundation.theme['bgtxt-blue-light']}, inset 0 0 0 1px ${LightFoundation.theme['bgtxt-blue-normal']}`)
  })

  describe('callback should called', () => {
    it('onFocus', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        input.focus()
      })
      expect(onFocus).toBeCalled()
    })

    it('onChange', () => {
      const onChange = jest.fn()
      const { getByTestId } = renderComponent({ onChange })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.change(input, { target: { value: 'test' } })
      })
      expect(onChange).toBeCalled()
    })

    it('onKeyDown', () => {
      const onKeyDown = jest.fn()
      const { getByTestId } = renderComponent({ onKeyDown })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.keyDown(input, { key: 'A', code: 'KeyA' })
      })
      expect(onKeyDown).toBeCalled()
    })

    it('onKeyUp', () => {
      const onKeyUp = jest.fn()
      const { getByTestId } = renderComponent({ onKeyUp })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.keyUp(input, { key: 'A', code: 'KeyA' })
      })
      expect(onKeyUp).toBeCalled()
    })
  })

  describe('no callback should called when "disabled" or "readOnly" props are "true"', () => {
    it('onFocus, disabled', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus, disabled: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        input.focus()
      })
      expect(onFocus).not.toBeCalled()
    })

    it('onFocus, readOnly', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus, readOnly: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        input.focus()
      })
      expect(onFocus).not.toBeCalled()
    })

    it('onChange, disabled', () => {
      const onChange = jest.fn()
      const { getByTestId } = renderComponent({ onChange, disabled: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.change(input, { target: { value: 'test' } })
      })
      expect(onChange).not.toBeCalled()
    })

    it('onChange, readOnly', () => {
      const onChange = jest.fn()
      const { getByTestId } = renderComponent({ onChange, readOnly: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.change(input, { target: { value: 'test' } })
      })
      expect(onChange).not.toBeCalled()
    })

    it('onKeyDown, disabled', () => {
      const onKeyDown = jest.fn()
      const { getByTestId } = renderComponent({ onKeyDown, disabled: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.keyDown(input, { key: 'A', code: 'KeyA' })
      })
      expect(onKeyDown).not.toBeCalled()
    })

    it('onKeyDown, readOnly', () => {
      const onKeyDown = jest.fn()
      const { getByTestId } = renderComponent({ onKeyDown, readOnly: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.keyDown(input, { key: 'A', code: 'KeyA' })
      })
      expect(onKeyDown).not.toBeCalled()
    })

    it('onKeyUp, disabled', () => {
      const onKeyUp = jest.fn()
      const { getByTestId } = renderComponent({ onKeyUp, disabled: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.keyUp(input, { key: 'A', code: 'KeyA' })
      })
      expect(onKeyUp).not.toBeCalled()
    })

    it('onKeyUp, readOnly', () => {
      const onKeyUp = jest.fn()
      const { getByTestId } = renderComponent({ onKeyUp, readOnly: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.keyUp(input, { key: 'A', code: 'KeyA' })
      })
      expect(onKeyUp).not.toBeCalled()
    })
  })

  describe('Keyboard event handlers for common ime control keys should not be called while composing', () => {
    it('onKeyDown', async () => {
      const onKeyDown = jest.fn()
      const { getByTestId } = renderComponent({ onKeyDown })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]

      COMMON_IME_CONTROL_KEYS.forEach(async (key) => {
        const isCompositionStartFired = fireEvent.compositionStart(input)
        fireEvent.keyDown(input, { key, isComposing: isCompositionStartFired })
        expect(onKeyDown).not.toBeCalled()
      })
    })

    it('onKeyUp', () => {
      const onKeyUp = jest.fn()
      const { getByTestId } = renderComponent({ onKeyUp })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]

      COMMON_IME_CONTROL_KEYS.forEach((key) => {
        const isCompositionStartFired = fireEvent.compositionStart(input)
        fireEvent.keyUp(input, { key, isComposing: isCompositionStartFired })
        expect(onKeyUp).not.toBeCalled()
      })
    })
  })
})
