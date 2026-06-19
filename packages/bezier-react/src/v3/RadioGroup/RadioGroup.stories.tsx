import { useEffect, useState } from 'react'

import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import {
  FormField,
  FormLabel,
} from '~/src/v3/FormField'

import { Radio, RadioGroup } from './RadioGroup'
import { type RadioGroupProps } from './RadioGroup.types'

enum Theme {
  System = 'System',
  Light = 'Light',
  Dark = 'Dark',
}

const meta: Meta<typeof RadioGroup> = {
  title: 'V3 components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    direction: {
      control: {
        type: 'radio',
      },
      options: ['vertical', 'horizontal'],
    },
  },
}

export default meta

const Template: StoryFn<RadioGroupProps<Theme>> = ({
  value: valueProp,
  onValueChange,
  ...props
}) => {
  const [value, setValue] = useState<Theme | undefined>(() => valueProp)

  useEffect(() => {
    setValue(valueProp)
  }, [valueProp])

  return (
    <RadioGroup
      value={value}
      onValueChange={(nextValue) => {
        setValue(nextValue)
        onValueChange?.(nextValue)
      }}
      {...props}
    >
      <Radio value={Theme.System}>{Theme.System}</Radio>
      <Radio value={Theme.Light}>{Theme.Light}</Radio>
      <Radio value={Theme.Dark}>{Theme.Dark}</Radio>
    </RadioGroup>
  )
}

export const Controlled: StoryObj<RadioGroupProps<Theme>> = {
  render: Template,
  args: {
    value: Theme.System,
    disabled: false,
    required: false,
    hasError: false,
    direction: 'vertical',
  },
}

export const Uncontrolled: StoryObj<RadioGroupProps<Theme>> = {
  render: Template,
  args: {
    defaultValue: Theme.System,
    disabled: false,
    required: false,
    hasError: false,
    direction: 'vertical',
  },
}

export const Horizontal: StoryObj<RadioGroupProps<Theme>> = {
  render: Template,
  args: {
    defaultValue: Theme.System,
    direction: 'horizontal',
    disabled: false,
  },
}

export const WithFormField: StoryObj<RadioGroupProps<Theme>> = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <FormField>
      <FormLabel>Theme</FormLabel>
      <RadioGroup defaultValue={Theme.System}>
        <Radio value={Theme.System}>{Theme.System}</Radio>
        <Radio value={Theme.Light}>{Theme.Light}</Radio>
        <Radio value={Theme.Dark}>{Theme.Dark}</Radio>
      </RadioGroup>
    </FormField>
  ),
}
