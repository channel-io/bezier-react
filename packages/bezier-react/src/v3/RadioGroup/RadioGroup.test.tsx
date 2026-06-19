import { isInaccessible } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'
import {
  FormField,
  FormLabel,
} from '~/src/v3/FormField'

import { Radio, RadioGroup } from './RadioGroup'
import { type RadioGroupProps, type RadioProps } from './RadioGroup.types'

const VALUES = ['0', '1', '2']

describe('RadioGroup', () => {
  const renderRadioGroup = ({
    radioGroupProps,
    radioProps,
  }: {
    radioGroupProps?: RadioGroupProps<string>
    radioProps?: Partial<RadioProps<string>>
  } = {}) =>
    render(
      <RadioGroup {...radioGroupProps}>
        {VALUES.map((value) => (
          <Radio
            key={value}
            value={value}
            {...radioProps}
          >
            {value}
          </Radio>
        ))}
      </RadioGroup>
    )

  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  describe('ARIA', () => {
    it('should be accessible', () => {
      const { container } = renderRadioGroup()
      expect(isInaccessible(container)).toBe(false)
    })

    it('should have \'role="radiogroup"\' attribute', () => {
      const { getByRole } = renderRadioGroup()
      expect(getByRole('radiogroup')).toBeInTheDocument()
    })

    it('should be required when required prop is true', () => {
      const { getByRole } = renderRadioGroup({
        radioGroupProps: { required: true },
      })
      expect(getByRole('radiogroup')).toBeRequired()
    })

    it('should be disabled when disabled prop is true', () => {
      const { getByRole } = renderRadioGroup({
        radioGroupProps: { disabled: true },
      })
      expect(getByRole('radiogroup')).toHaveAttribute('aria-disabled', 'true')
    })

    it('children should be disabled when disabled prop is true', () => {
      const { getAllByRole } = renderRadioGroup({
        radioGroupProps: { disabled: true },
      })
      const radios = getAllByRole('radio')
      radios.forEach((radio) => expect(radio).toBeDisabled())
    })
  })

  describe('User Interactions', () => {
    it('should focus and check radio when user clicks on a radio', async () => {
      const { getByRole } = renderRadioGroup()
      const radio = getByRole('radio', { name: VALUES[0] })
      await user.click(radio)
      expect(radio).toHaveFocus()
      expect(radio).toBeChecked()
    })

    it('should call the change event handler when user clicks on a radio in a controlled radio group', async () => {
      const onValueChange = jest.fn()
      const { getByRole } = renderRadioGroup({
        radioGroupProps: { value: VALUES[0], onValueChange },
      })
      const radio = getByRole('radio', { name: VALUES[1] })
      await user.click(radio)
      expect(onValueChange).toHaveBeenCalledTimes(1)
    })

    it('should focus on the first radio item when user presses tab key', async () => {
      const { getByRole } = renderRadioGroup()
      const radio = getByRole('radio', { name: VALUES[0] })
      await user.tab()
      expect(radio).toHaveFocus()
    })

    it('should check radio when user presses space key on a focused radio', async () => {
      const { getByRole } = renderRadioGroup()
      const radio = getByRole('radio', { name: VALUES[0] })
      await user.tab()
      expect(radio).toHaveFocus()
      await user.keyboard('{ }')
      expect(radio).toHaveFocus()
      expect(radio).toBeChecked()
    })

    it('should focus next radio when user presses arrow down key', async () => {
      const { getByRole } = renderRadioGroup()
      const radio = getByRole('radio', { name: VALUES[0] })
      const nextRadio = getByRole('radio', { name: VALUES[1] })
      await user.tab()
      expect(radio).toHaveFocus()
      await user.keyboard('{ArrowDown}')
      expect(nextRadio).toHaveFocus()
    })

    it('should focus previous radio when user presses arrow up key', async () => {
      const { getByRole } = renderRadioGroup()
      const radio = getByRole('radio', { name: VALUES[0] })
      const nextRadio = getByRole('radio', { name: VALUES[2] })
      await user.tab()
      expect(radio).toHaveFocus()
      await user.keyboard('{ArrowUp}')
      expect(nextRadio).toHaveFocus()
    })
  })

  describe('Radio', () => {
    it('should have \'role="radio"\' attribute', () => {
      const { getAllByRole } = renderRadioGroup()
      const radios = getAllByRole('radio')
      radios.forEach((radio) => expect(radio).toBeInTheDocument())
    })

    it('should be disabled when disabled prop is true', () => {
      const { getAllByRole } = renderRadioGroup({
        radioProps: { disabled: true },
      })
      const radios = getAllByRole('radio')
      radios.forEach((radio) => expect(radio).toBeDisabled())
    })
  })

  describe('With FormField', () => {
    it('should be labelled by FormLabel', () => {
      const { getByRole } = render(
        <FormField>
          <FormLabel>Theme</FormLabel>
          <RadioGroup>
            <Radio value="system">System</Radio>
          </RadioGroup>
        </FormField>
      )

      expect(getByRole('radiogroup', { name: 'Theme' })).toBeInTheDocument()
    })

    it("FormField's disabled prop should be passed to RadioGroup", () => {
      const { getAllByRole } = render(
        <FormField disabled>
          <FormLabel>Theme</FormLabel>
          <RadioGroup>
            <Radio value="system">System</Radio>
          </RadioGroup>
        </FormField>
      )

      getAllByRole('radio').forEach((radio) => expect(radio).toBeDisabled())
    })
  })
})
