import { fireEvent } from '@testing-library/dom'

import { COMMON_IME_CONTROL_KEYS } from '~/src/hooks/useKeyboardActionLockerWhileComposing'
import { render } from '~/src/utils/test'

import { TextArea } from './TextArea'
import type { TextAreaProps } from './TextArea.types'

describe('TextArea', () => {
  let props: TextAreaProps

  beforeEach(() => {
    jest.useFakeTimers()
    props = {}
  })

  const renderComponent = (optionProps?: TextAreaProps) =>
    render(
      <TextArea
        {...props}
        {...optionProps}
      />
    )

  it('should have the default attributes', () => {
    const { getByRole } = renderComponent()
    const rendered = getByRole('textbox')

    expect(rendered).not.toHaveAttribute('readOnly')
    expect(rendered).not.toHaveAttribute('disabled')
    expect(rendered).not.toHaveAttribute('placeholder')
    expect(rendered).not.toHaveAttribute('maxRows')
    expect(rendered).not.toHaveAttribute('minRows')
  })

  it('should have the same "placeholder" as the injected value when a placeholder is provided', () => {
    const PLACEHOLDER_TEXT = 'this is placeholder'
    const { getByRole } = renderComponent({ placeholder: PLACEHOLDER_TEXT })
    const rendered = getByRole('textbox')

    expect(rendered).toHaveAttribute('placeholder', PLACEHOLDER_TEXT)
  })

  it('should have the injected attributes when "disabled" or "readOnly" props are provided', () => {
    const { getByRole } = renderComponent({ disabled: true, readOnly: true })
    const rendered = getByRole('textbox')
    expect(rendered).toHaveAttribute('readOnly')
    expect(rendered).toHaveAttribute('disabled')
  })

  describe('onFocus', () => {
    it('should not trigger when disabled', () => {
      const onFocus = jest.fn()
      const { getByRole } = renderComponent({ onFocus, disabled: true })
      const rendered = getByRole('textbox')
      rendered.focus()

      expect(onFocus).not.toHaveBeenCalled()
    })

    it('should trigger when not disabled', () => {
      const onFocus = jest.fn()
      const { getByRole } = renderComponent({ onFocus })
      const rendered = getByRole('textbox')
      rendered.focus()

      expect(onFocus).toHaveBeenCalled()
    })
  })

  describe('onChange', () => {
    it('should trigger correctly under normal circumstances', () => {
      const onChange = jest.fn()
      const { getByRole } = renderComponent({ onChange })
      const rendered = getByRole('textbox')

      fireEvent.change(rendered, { target: { value: 'test' } })

      expect(onChange).toHaveBeenCalled()
    })
  })

  describe('onBlur', () => {
    it('should trigger correctly under normal circumstances', () => {
      const onBlur = jest.fn()
      const { getByRole } = renderComponent({ onBlur })
      const rendered = getByRole('textbox')
      rendered.focus()
      rendered.blur()

      expect(onBlur).toHaveBeenCalled()
    })
  })

  describe('autoFocus', () => {
    it('should be in focus state when autoFocus is provided', () => {
      const { getByRole } = renderComponent({ autoFocus: true })
      const rendered = getByRole('textbox')

      expect(rendered).toEqual(document.activeElement)
    })

    it('should place the selection at the end', () => {
      const TEST_INITIAL_VALUE = 'test value'
      const { getByRole } = renderComponent({
        autoFocus: true,
        value: TEST_INITIAL_VALUE,
      })
      const rendered = getByRole('textbox') as HTMLTextAreaElement
      expect(rendered.selectionEnd).toEqual(TEST_INITIAL_VALUE.length)
    })
  })

  describe('Keyboard event handlers for common ime control keys should not be called while composing ', () => {
    it('onKeyDown', () => {
      const onKeyDown = jest.fn()
      const { getByRole } = renderComponent({ onKeyDown })
      const rendered = getByRole('textbox')

      COMMON_IME_CONTROL_KEYS.forEach((key) => {
        const isCompositionStartFired = fireEvent.compositionStart(rendered)
        fireEvent.keyDown(rendered, {
          key,
          isComposing: isCompositionStartFired,
        })
        expect(onKeyDown).not.toHaveBeenCalled()
      })
    })

    it('onKeyUp', () => {
      const onKeyUp = jest.fn()
      const { getByRole } = renderComponent({ onKeyUp })
      const rendered = getByRole('textbox')

      COMMON_IME_CONTROL_KEYS.forEach((key) => {
        const isCompositionStartFired = fireEvent.compositionStart(rendered)
        fireEvent.keyUp(rendered, { key, isComposing: isCompositionStartFired })
        expect(onKeyUp).not.toHaveBeenCalled()
      })
    })
  })
})
