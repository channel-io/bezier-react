import { useEffect, useState } from 'react'

import { type Meta, type StoryFn } from '@storybook/react'

import { Checkbox } from './Checkbox'
import { type CheckboxProps, type CheckedState } from './Checkbox.types'

const meta: Meta<typeof Checkbox> = {
  title: 'V3 components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: {
        type: 'radio',
      },
      options: [true, false, 'indeterminate'],
    },
  },
}
export default meta

const Template: StoryFn<CheckboxProps<CheckedState>> = ({
  children,
  ...otherCheckboxProps
}) => <Checkbox {...otherCheckboxProps}>{children}</Checkbox>

const ControlledTemplate: StoryFn<CheckboxProps<CheckedState>> = ({
  children,
  checked = false,
  onCheckedChange,
  ...otherCheckboxProps
}) => {
  const [currentChecked, setCurrentChecked] = useState(checked)

  useEffect(() => {
    setCurrentChecked(checked)
  }, [checked])

  return (
    <Checkbox
      {...otherCheckboxProps}
      checked={currentChecked}
      onCheckedChange={(nextChecked) => {
        setCurrentChecked(nextChecked)
        onCheckedChange?.(nextChecked)
      }}
    >
      {children}
    </Checkbox>
  )
}

export const Controlled = {
  render: ControlledTemplate,

  args: {
    checked: true,
    disabled: false,
    required: false,
    hasError: false,
    children: 'Option',
  },
}

export const Uncontrolled = {
  render: Template,

  args: {
    defaultChecked: true,
    disabled: false,
    required: false,
    hasError: false,
    children: 'Option',
  },
}
