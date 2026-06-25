import { fireEvent } from '@testing-library/dom'

import { COMMON_IME_CONTROL_KEYS } from '~/src/hooks/useKeyboardActionLockerWhileComposing'
import { render } from '~/src/utils/test'

import { TextArea } from './TextArea'
import type { TextAreaProps } from './TextArea.types'



describe('TextArea', () => {
  const renderComponent = (props?: TextAreaProps) => render(<TextArea {...props} />)

  it('has default attributes', () => {
    const { getByRole } = renderComponent()
    const textarea = getByRole('textbox')

    expect(textarea).toHaveAttribute('id')
    expect(textarea).not.toHaveAttribute('readOnly')
    expect(textarea).not.toHaveAttribute('disabled')
    expect(textarea).not.toHaveAttribute('placeholder')
    expect(textarea).not.toHaveAttribute('maxRows')
    expect(textarea).not.toHaveAttribute('minRows')
  })

  it('passes native textarea attributes', () => {
    const { getByRole } = renderComponent({
      id: 'textarea-id',
      name: 'message',
      placeholder: 'placeholder',
      maxLength: 100,
    })
    const textarea = getByRole('textbox')

    expect(textarea).toHaveAttribute('id', 'textarea-id')
    expect(textarea).toHaveAttribute('name', 'message')
    expect(textarea).toHaveAttribute('placeholder', 'placeholder')
    expect(textarea).toHaveAttribute('maxLength', '100')
  })

  it('applies form field state attributes', () => {
    const { getByRole } = renderComponent({
      hasError: true,
      required: true,
      readOnly: true,
    })
    const textarea = getByRole('textbox')

    expect(textarea).toHaveAttribute('aria-invalid', 'true')
    expect(textarea).toHaveAttribute('aria-required', 'true')
    expect(textarea).toHaveAttribute('aria-readonly', 'true')
    expect(textarea).toHaveAttribute('readOnly')
  })

  it('calls event handlers', () => {
    const onFocus = jest.fn()
    const onChange = jest.fn()
    const onBlur = jest.fn()
    const { getByRole } = renderComponent({
      onFocus,
      onChange,
      onBlur,
    })
    const textarea = getByRole('textbox')

    textarea.focus()
    fireEvent.change(textarea, { target: { value: 'test' } })
    textarea.blur()

    expect(onFocus).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalled()
    expect(onBlur).toHaveBeenCalled()
  })

  it('focuses and places the selection at the end when autoFocus is true', () => {
    const { getByRole } = renderComponent({
      autoFocus: true,
      value: 'test value',
    })
    const textarea = getByRole('textbox') as HTMLTextAreaElement

    expect(textarea).toEqual(document.activeElement)
    expect(textarea.selectionEnd).toBe('test value'.length)
  })

  it('locks common IME control keys while composing', () => {
    const onKeyDown = jest.fn()
    const onKeyUp = jest.fn()
    const { getByRole } = renderComponent({ onKeyDown, onKeyUp })
    const textarea = getByRole('textbox')

    COMMON_IME_CONTROL_KEYS.forEach((key) => {
      const isCompositionStartFired = fireEvent.compositionStart(textarea)
      fireEvent.keyDown(textarea, { key, isComposing: isCompositionStartFired })
      fireEvent.keyUp(textarea, { key, isComposing: isCompositionStartFired })
    })

    expect(onKeyDown).not.toHaveBeenCalled()
    expect(onKeyUp).not.toHaveBeenCalled()
  })
})
