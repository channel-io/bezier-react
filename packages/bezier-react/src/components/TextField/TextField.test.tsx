import { fireEvent } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import { COMMON_IME_CONTROL_KEYS } from '~/src/hooks/useKeyboardActionLockerWhileComposing'
import { render } from '~/src/utils/test'

import { TEXT_INPUT_CLEAR_ICON_TEST_ID, TextField } from './TextField'
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
    const { getByRole } = renderComponent()
    const input = getByRole('textbox')
    expect(input).not.toHaveAttribute('disabled')
    expect(input).not.toHaveAttribute('readOnly')
    expect(input).not.toHaveAttribute('placeholder')
    expect(input).not.toHaveAttribute('maxLength')
  })

  it('should have "disabled" attribute when "disabled" props is "true"', () => {
    const { getByRole } = renderComponent({ disabled: true })
    const input = getByRole('textbox')
    expect(input).toHaveAttribute('disabled')
  })

  it('should have "readOnly" attribute when "readOnly" props is "true"', () => {
    const { getByRole } = renderComponent({ readOnly: true })
    const input = getByRole('textbox')
    expect(input).toHaveAttribute('readOnly')
  })

  it('should have "placeholder" attribute when "placeholder" props is "true"', () => {
    const { getByRole } = renderComponent({
      placeholder: 'this is placeholder',
    })
    const input = getByRole('textbox')
    expect(input).toHaveAttribute('placeholder', 'this is placeholder')
  })

  it('should have "maxLength" attribute when "maxLength" props is "true"', () => {
    const { getByRole } = renderComponent({ maxLength: 5 })
    const input = getByRole('textbox')
    expect(input).toHaveAttribute('maxLength', '5')
  })

  describe('callback should be called', () => {
    it('onFocus', () => {
      const onFocus = jest.fn()
      const { getByRole } = renderComponent({ onFocus })
      const input = getByRole('textbox')
      input.focus()
      expect(onFocus).toHaveBeenCalled()
    })

    it('onChange', () => {
      const onChange = jest.fn()
      const { getByRole } = renderComponent({ onChange })
      const input = getByRole('textbox')
      fireEvent.change(input, { target: { value: 'test' } })
      expect(onChange).toHaveBeenCalled()
    })

    it('onKeyDown', () => {
      const onKeyDown = jest.fn()
      const { getByRole } = renderComponent({ onKeyDown })
      const input = getByRole('textbox')
      fireEvent.keyDown(input, { key: 'A', code: 'KeyA' })
      expect(onKeyDown).toHaveBeenCalled()
    })

    it('onKeyUp', () => {
      const onKeyUp = jest.fn()
      const { getByRole } = renderComponent({ onKeyUp })
      const input = getByRole('textbox')
      fireEvent.keyUp(input, { key: 'A', code: 'KeyA' })
      expect(onKeyUp).toHaveBeenCalled()
    })
  })

  describe('no callback should called when "disabled" or "readOnly" props are "true"', () => {
    it('onFocus, disabled', () => {
      const onFocus = jest.fn()
      const { getByRole } = renderComponent({ onFocus, disabled: true })
      const input = getByRole('textbox')
      input.focus()
      expect(onFocus).not.toHaveBeenCalled()
    })

    it('onFocus, readOnly', () => {
      const onFocus = jest.fn()
      const { getByRole } = renderComponent({ onFocus, readOnly: true })
      const input = getByRole('textbox')
      input.focus()
      expect(onFocus).not.toHaveBeenCalled()
    })

    it('onChange, disabled', () => {
      const onChange = jest.fn()
      const { getByRole } = renderComponent({ onChange, disabled: true })
      const input = getByRole('textbox')
      fireEvent.change(input, { target: { value: 'test' } })
      expect(onChange).not.toHaveBeenCalled()
    })

    it('onChange, readOnly', () => {
      const onChange = jest.fn()
      const { getByRole } = renderComponent({ onChange, readOnly: true })
      const input = getByRole('textbox')
      fireEvent.change(input, { target: { value: 'test' } })
      expect(onChange).not.toHaveBeenCalled()
    })

    it('onKeyDown, disabled', () => {
      const onKeyDown = jest.fn()
      const { getByRole } = renderComponent({ onKeyDown, disabled: true })
      const input = getByRole('textbox')
      fireEvent.keyDown(input, { key: 'A', code: 'KeyA' })
      expect(onKeyDown).not.toHaveBeenCalled()
    })

    it('onKeyDown, readOnly', () => {
      const onKeyDown = jest.fn()
      const { getByRole } = renderComponent({ onKeyDown, readOnly: true })
      const input = getByRole('textbox')
      fireEvent.keyDown(input, { key: 'A', code: 'KeyA' })
      expect(onKeyDown).not.toHaveBeenCalled()
    })

    it('onKeyUp, disabled', () => {
      const onKeyUp = jest.fn()
      const { getByRole } = renderComponent({ onKeyUp, disabled: true })
      const input = getByRole('textbox')
      fireEvent.keyUp(input, { key: 'A', code: 'KeyA' })
      expect(onKeyUp).not.toHaveBeenCalled()
    })

    it('onKeyUp, readOnly', () => {
      const onKeyUp = jest.fn()
      const { getByRole } = renderComponent({ onKeyUp, readOnly: true })
      const input = getByRole('textbox')
      fireEvent.keyUp(input, { key: 'A', code: 'KeyA' })
      expect(onKeyUp).not.toHaveBeenCalled()
    })
  })

  describe('Keyboard event handlers for common ime control keys should not be called while composing', () => {
    it('onKeyDown', async () => {
      const onKeyDown = jest.fn()
      const { getByRole } = renderComponent({ onKeyDown })
      const input = getByRole('textbox')

      COMMON_IME_CONTROL_KEYS.forEach(async (key) => {
        const isCompositionStartFired = fireEvent.compositionStart(input)
        fireEvent.keyDown(input, { key, isComposing: isCompositionStartFired })
        expect(onKeyDown).not.toHaveBeenCalled()
      })
    })

    it('onKeyUp', () => {
      const onKeyUp = jest.fn()
      const { getByRole } = renderComponent({ onKeyUp })
      const input = getByRole('textbox')

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
     * Jest-dom does not support css which is not inline.
     * @see https://github.com/testing-library/jest-dom/issues/113#issuecomment-496971128
     */
    // it('disappear when empty & focused/hovered', async () => {
    //   const { getByTestId } = renderComponent({ value: '', allowClear: true })
    //   const rendered = getByTestId(TEXT_INPUT_TEST_ID)
    //   const input = rendered.getElementsByTagName('input')[0]

    //   await user.hover(input)
    //   input.focus()

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
      const { getByRole, getByTestId } = renderComponent({
        value: 'test',
        allowClear: true,
      })
      const input = getByRole('textbox')

      await user.hover(input)

      const clearButton = getByTestId(TEXT_INPUT_CLEAR_ICON_TEST_ID)
      expect(clearButton).toBeVisible()
    })

    it('appear when filled & focused', () => {
      const { getByRole, getByTestId } = renderComponent({
        value: 'test',
        allowClear: true,
      })
      const input = getByRole('textbox')

      input.focus()

      const clearButton = getByTestId(TEXT_INPUT_CLEAR_ICON_TEST_ID)
      expect(clearButton).toBeVisible()
    })

    it('should focus the clear button when Tab key is pressed', async () => {
      const { getByRole } = renderComponent({
        value: 'test',
        allowClear: true,
      })
      const input = getByRole('textbox')

      input.focus()
      await user.tab()

      expect(document.activeElement).toHaveClass('CloseIconWrapper')
    })
  })
})
