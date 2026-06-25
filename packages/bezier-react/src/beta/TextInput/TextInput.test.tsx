import * as React from 'react'

import { SearchIcon } from '@channel.io/bezier-icons'
import { fireEvent } from '@testing-library/dom'

import { COMMON_IME_CONTROL_KEYS } from '~/src/hooks/useKeyboardActionLockerWhileComposing'
import { render } from '~/src/utils/test'

import { TextInput } from './TextInput'
import type { TextInputProps, TextInputRef } from './TextInput.types'



describe('TextInput', () => {
  const renderComponent = (props?: TextInputProps) => render(<TextInput {...props} />)

  it('has default attributes', () => {
    const { getByRole } = renderComponent()
    const input = getByRole('textbox')

    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('id')
    expect(input).not.toHaveAttribute('disabled')
    expect(input).not.toHaveAttribute('readOnly')
    expect(input).not.toHaveAttribute('placeholder')
  })

  it('passes native input attributes', () => {
    const { getByRole } = renderComponent({
      placeholder: 'placeholder',
      maxLength: 5,
      id: 'input-id',
      name: 'name',
    })
    const input = getByRole('textbox')

    expect(input).toHaveAttribute('placeholder', 'placeholder')
    expect(input).toHaveAttribute('maxLength', '5')
    expect(input).toHaveAttribute('id', 'input-id')
    expect(input).toHaveAttribute('name', 'name')
  })

  it('applies form field state attributes', () => {
    const { getByRole } = renderComponent({
      hasError: true,
      required: true,
      readOnly: true,
    })
    const input = getByRole('textbox')

    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-required', 'true')
    expect(input).toHaveAttribute('aria-readonly', 'true')
    expect(input).toHaveAttribute('readOnly')
  })

  it('applies className to root and inputClassName to input', () => {
    const { getByRole } = renderComponent({
      className: 'root-class',
      inputClassName: 'input-class',
    })
    const input = getByRole('textbox')

    expect(input).toHaveClass('input-class')
    expect(input.parentElement?.parentElement).toHaveClass('root-class')
  })

  it('renders string and icon side content', () => {
    const { getByText, container } = renderComponent({
      leadingContent: 'https://',
      trailingContent: SearchIcon,
    })

    expect(getByText('https://')).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('calls event handlers when active', () => {
    const onFocus = jest.fn()
    const onChange = jest.fn()
    const onKeyDown = jest.fn()
    const onKeyUp = jest.fn()
    const { getByRole } = renderComponent({
      onFocus,
      onChange,
      onKeyDown,
      onKeyUp,
    })
    const input = getByRole('textbox')

    input.focus()
    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.keyDown(input, { key: 'A', code: 'KeyA' })
    fireEvent.keyUp(input, { key: 'A', code: 'KeyA' })

    expect(onFocus).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalled()
    expect(onKeyDown).toHaveBeenCalled()
    expect(onKeyUp).toHaveBeenCalled()
  })

  it('does not call event handlers when disabled or readOnly', () => {
    const disabledChange = jest.fn()
    const readOnlyChange = jest.fn()

    const { getByRole: getDisabledInput, unmount } = renderComponent({
      disabled: true,
      onChange: disabledChange,
    })
    fireEvent.change(getDisabledInput('textbox'), { target: { value: 'test' } })
    unmount()

    const { getByRole: getReadOnlyInput } = renderComponent({
      readOnly: true,
      onChange: readOnlyChange,
    })
    fireEvent.change(getReadOnlyInput('textbox'), {
      target: { value: 'test' },
    })

    expect(disabledChange).not.toHaveBeenCalled()
    expect(readOnlyChange).not.toHaveBeenCalled()
  })

  it('locks common IME control keys while composing', () => {
    const onKeyDown = jest.fn()
    const onKeyUp = jest.fn()
    const { getByRole } = renderComponent({ onKeyDown, onKeyUp })
    const input = getByRole('textbox')

    COMMON_IME_CONTROL_KEYS.forEach((key) => {
      const isCompositionStartFired = fireEvent.compositionStart(input)
      fireEvent.keyDown(input, { key, isComposing: isCompositionStartFired })
      fireEvent.keyUp(input, { key, isComposing: isCompositionStartFired })
    })

    expect(onKeyDown).not.toHaveBeenCalled()
    expect(onKeyUp).not.toHaveBeenCalled()
  })

  it('selects text on focus when selectAllOnFocus is true', async () => {
    const { getByRole } = renderComponent({
      value: 'test value',
      selectAllOnFocus: true,
    })
    const input = getByRole('textbox') as HTMLInputElement

    input.focus()
    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(input.selectionStart).toBe(0)
    expect(input.selectionEnd).toBe('test value'.length)
  })

  it('exposes imperative input methods', () => {
    const ref = React.createRef<TextInputRef>()
    render(
      <TextInput
        ref={ref}
        value="test"
      />
    )

    ref.current?.focus()
    ref.current?.selectAll()

    expect(ref.current?.getDOMNode()).toBeInstanceOf(HTMLInputElement)
    expect(ref.current?.getSelectionRange()).toEqual([0, 4])
  })
})
