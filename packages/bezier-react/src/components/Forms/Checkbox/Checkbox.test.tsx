/* External dependencies */
import React from 'react'
import { isInaccessible } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

/* Internal dependencies */
import { render } from '~/src/utils/testUtils'
import { FormControl, FormControlProps } from '~/src/components/Forms/FormControl'
import { Checkbox } from './Checkbox'
import { CheckboxProps, CheckedState } from './Checkbox.types'

const VALUES = ['0', '1', '2']

describe('Checkbox', () => {
  const renderCheckbox = ({
    children,
    ...rest
  }: CheckboxProps<CheckedState> = {}) => render(
    <Checkbox {...rest}>
      { children }
    </Checkbox>,
  )

  const renderCheckboxes = (
    props: Omit<CheckboxProps<CheckedState>, 'children'> = {},
  ) => render(
    <div role="group">
      { VALUES.map(value => (
        <Checkbox
          key={value}
          value={value}
          {...props}
        >
          { value }
        </Checkbox>
      )) }
    </div>,
  )

  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  describe('ARIA', () => {
    it('should be accessible', () => {
      const { container } = renderCheckbox()
      expect(isInaccessible(container)).toBe(false)
    })

    it('should have \'role="checkbox"\' attribute', () => {
      const { getByRole } = renderCheckbox()
      expect(getByRole('checkbox')).toBeInTheDocument()
    })

    it('should be disabled when disabled prop is true', () => {
      const { getByRole } = renderCheckbox({ disabled: true })
      expect(getByRole('checkbox')).toHaveAttribute('aria-disabled', 'true')
    })

    it('should be required when required prop is true', () => {
      const { getByRole } = renderCheckbox({ required: true })
      expect(getByRole('checkbox')).toHaveAttribute('aria-required', 'true')
    })

    it('should be invalid when hasError prop is true', () => {
      const { getByRole } = renderCheckbox({ hasError: true })
      expect(getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('should have \'aria-checked="mixed"\' attribute If it is in indeterminate state', () => {
      const { getByRole } = renderCheckbox({ checked: 'indeterminate' })
      expect(getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed')
    })
  })

  describe('User Interactions', () => {
    it('should focus and check checkbox when user clicks on a checkbox', async () => {
      const { getByRole } = renderCheckbox()
      const checkbox = getByRole('checkbox')
      await user.click(checkbox)
      expect(checkbox).toHaveFocus()
      expect(checkbox).toBeChecked()
    })

    it('should focus and check checkbox when user clicks on a label of checkbox', async () => {
      const { getByText, getByRole } = renderCheckbox({ children: 'Label' })
      const checkbox = getByRole('checkbox')
      const label = getByText('Label')
      await user.click(label)
      expect(checkbox).toHaveFocus()
      expect(checkbox).toBeChecked()
    })

    it('should call the checked change event handler when user clicks on a checkbox', async () => {
      const onCheckedChange = jest.fn()
      const { getByRole } = renderCheckbox({ onCheckedChange })
      const checkbox = getByRole('checkbox')
      await user.click(checkbox)
      expect(onCheckedChange).toBeCalledTimes(1)
    })

    it('should focus on the first checkbox item when user presses tab key', async () => {
      const { getByRole } = renderCheckboxes()
      const checkbox = getByRole('checkbox', { name: VALUES[0] })
      await user.tab()
      expect(checkbox).toHaveFocus()
    })

    it('should check checkbox when user presses space key on a focused checkbox', async () => {
      const { getByRole } = renderCheckboxes()
      const checkbox = getByRole('checkbox', { name: VALUES[0] })
      await user.tab()
      expect(checkbox).toHaveFocus()
      await user.keyboard('{ }')
      expect(checkbox).toHaveFocus()
      expect(checkbox).toBeChecked()
    })

    it('should call the checked change event handler user presses space key on a focused checkbox', async () => {
      const onCheckedChange = jest.fn()
      const { getByRole } = renderCheckboxes({ onCheckedChange })
      const checkbox = getByRole('checkbox', { name: VALUES[0] })
      await user.tab()
      expect(checkbox).toHaveFocus()
      await user.keyboard('{ }')
      expect(onCheckedChange).toBeCalledTimes(1)
    })
  })

  describe('With FormControl', () => {
    const renderCheckboxWithFormControl = ({
      children,
      formControlProps = {},
      checkboxProps = {},
    }: {
      children?: React.ReactNode
      formControlProps?: Omit<FormControlProps, 'children'>
      checkboxProps?: Omit<CheckboxProps<CheckedState>, 'children'>
    }) => render(
      <FormControl {...formControlProps}>
        <Checkbox {...checkboxProps}>
          { children }
        </Checkbox>
      </FormControl>,
    )

    it('FormControl\'s disabled prop should be passed to Checkbox', () => {
      const { getByRole } = renderCheckboxWithFormControl({ formControlProps: { disabled: true } })
      expect(getByRole('checkbox')).toHaveAttribute('aria-disabled', 'true')
    })

    it('FormControl\'s hasError prop should be passed to Checkbox', () => {
      const { getByRole } = renderCheckboxWithFormControl({ formControlProps: { hasError: true } })
      expect(getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('FormControl\'s required prop should be passed to Checkbox', () => {
      const { getByRole } = renderCheckboxWithFormControl({ formControlProps: { required: true } })
      expect(getByRole('checkbox')).toHaveAttribute('aria-required', 'true')
    })

    it('FormControl\'s id prop should be passed to Checkbox', () => {
      const { getByRole } = renderCheckboxWithFormControl({ formControlProps: { id: 'form-control-id' } })
      expect(getByRole('checkbox')).toHaveAttribute('id', 'form-control-id')
    })

    it('FormControl\'s id prop should be overwritten by Checkbox\'s id prop', () => {
      const { getByRole } = renderCheckboxWithFormControl({ formControlProps: { id: 'form-control-id' }, checkboxProps: { id: 'checkbox-id' } })
      expect(getByRole('checkbox')).toHaveAttribute('id', 'checkbox-id')
    })
  })
})
