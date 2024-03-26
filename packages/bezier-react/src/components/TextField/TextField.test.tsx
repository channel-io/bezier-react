import React from 'react'

import { fireEvent } from '@testing-library/dom'
import { act, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { COMMON_IME_CONTROL_KEYS } from '~/src/hooks/useKeyboardActionLockerWhileComposing'
import { render } from '~/src/utils/test'

import {
  TEXT_INPUT_CLEAR_ICON_TEST_ID,
  TEXT_INPUT_TEST_ID,
  TextField,
} from './TextField'
import { type TextFieldProps } from './TextField.types'

describe('TextField', () => {
  const user = userEvent.setup()
  let props: TextFieldProps

  beforeEach(() => {
    props = {}
  })

  const renderComponent = (optionProps?: TextFieldProps) =>
    render(
      <TextField
        {...props}
        {...optionProps}
      />
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
    const { getByTestId } = renderComponent({
      placeholder: 'this is placeholder',
    })
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

  describe('callback should called', () => {
    it('onFocus', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        input.focus()
      })
      expect(onFocus).toHaveBeenCalled()
    })

    it('onChange', () => {
      const onChange = jest.fn()
      const { getByTestId } = renderComponent({ onChange })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.change(input, { target: { value: 'test' } })
      })
      expect(onChange).toHaveBeenCalled()
    })

    it('onKeyDown', () => {
      const onKeyDown = jest.fn()
      const { getByTestId } = renderComponent({ onKeyDown })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.keyDown(input, { key: 'A', code: 'KeyA' })
      })
      expect(onKeyDown).toHaveBeenCalled()
    })

    it('onKeyUp', () => {
      const onKeyUp = jest.fn()
      const { getByTestId } = renderComponent({ onKeyUp })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.keyUp(input, { key: 'A', code: 'KeyA' })
      })
      expect(onKeyUp).toHaveBeenCalled()
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
      expect(onFocus).not.toHaveBeenCalled()
    })

    it('onFocus, readOnly', () => {
      const onFocus = jest.fn()
      const { getByTestId } = renderComponent({ onFocus, readOnly: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        input.focus()
      })
      expect(onFocus).not.toHaveBeenCalled()
    })

    it('onChange, disabled', () => {
      const onChange = jest.fn()
      const { getByTestId } = renderComponent({ onChange, disabled: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.change(input, { target: { value: 'test' } })
      })
      expect(onChange).not.toHaveBeenCalled()
    })

    it('onChange, readOnly', () => {
      const onChange = jest.fn()
      const { getByTestId } = renderComponent({ onChange, readOnly: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.change(input, { target: { value: 'test' } })
      })
      expect(onChange).not.toHaveBeenCalled()
    })

    it('onKeyDown, disabled', () => {
      const onKeyDown = jest.fn()
      const { getByTestId } = renderComponent({ onKeyDown, disabled: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.keyDown(input, { key: 'A', code: 'KeyA' })
      })
      expect(onKeyDown).not.toHaveBeenCalled()
    })

    it('onKeyDown, readOnly', () => {
      const onKeyDown = jest.fn()
      const { getByTestId } = renderComponent({ onKeyDown, readOnly: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.keyDown(input, { key: 'A', code: 'KeyA' })
      })
      expect(onKeyDown).not.toHaveBeenCalled()
    })

    it('onKeyUp, disabled', () => {
      const onKeyUp = jest.fn()
      const { getByTestId } = renderComponent({ onKeyUp, disabled: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.keyUp(input, { key: 'A', code: 'KeyA' })
      })
      expect(onKeyUp).not.toHaveBeenCalled()
    })

    it('onKeyUp, readOnly', () => {
      const onKeyUp = jest.fn()
      const { getByTestId } = renderComponent({ onKeyUp, readOnly: true })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]
      act(() => {
        fireEvent.keyUp(input, { key: 'A', code: 'KeyA' })
      })
      expect(onKeyUp).not.toHaveBeenCalled()
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
        expect(onKeyDown).not.toHaveBeenCalled()
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
        expect(onKeyUp).not.toHaveBeenCalled()
      })
    })
  })

  describe('show remove button only when it is filled and focused/hovered', () => {
    /**
     * FIXME: This test is not working properly.
     * @see https://github.com/testing-library/jest-dom/issues/444
     */
    // it('disappear when empty & focused/hovered', async () => {
    //   const { getByTestId } = renderComponent({ value: '', allowClear: true })
    //   const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    //   const input = rendered.getElementsByTagName('input')[0]

    //   await act(async () => {
    //     await user.hover(input)
    //     input.focus()
    //   })

    //   const clearButton = within(rendered).queryByTestId(TEXT_INPUT_CLEAR_ICON_TEST_ID)
    //   expect(clearButton).not.toBeVisible()
    // })

    // it('disappear when filled & not focused/hovered', () => {
    //   const { getByTestId } = renderComponent({ value: 'test', allowClear: true, autoFocus: false })
    //   const rendered = getByTestId(TEXT_INPUT_TEST_ID)

    //   const clearButton = within(rendered).queryByTestId(TEXT_INPUT_CLEAR_ICON_TEST_ID)
    //   expect(clearButton).not.toBeVisible()
    // })

    it('appear when filled & hovered', async () => {
      const { getByTestId } = renderComponent({
        value: 'test',
        allowClear: true,
      })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]

      await act(async () => {
        await user.hover(input)
      })

      const clearButton = within(rendered).getByTestId(
        TEXT_INPUT_CLEAR_ICON_TEST_ID
      )
      expect(clearButton).toBeVisible()
    })

    it('appear when filled & focused', () => {
      const { getByTestId } = renderComponent({
        value: 'test',
        allowClear: true,
      })
      const rendered = getByTestId(TEXT_INPUT_TEST_ID)
      const input = rendered.getElementsByTagName('input')[0]

      act(() => {
        input.focus()
      })

      const clearButton = within(rendered).getByTestId(
        TEXT_INPUT_CLEAR_ICON_TEST_ID
      )
      expect(clearButton).toBeVisible()
    })
  })
})
