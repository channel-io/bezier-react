import React, {
  useEffect,
  useState,
} from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { Radio } from './Radio'
import { RadioGroup } from './RadioGroup'
import { type RadioGroupProps } from './RadioGroup.types'

enum Theme {
  System = 'System',
  Light = 'Light',
  Dark = 'Dark',
}

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  argTypes: {
    direction: {
      control: {
        type: 'radio',
        options: ['vertical', 'horizontal'],
      },
    },
  },
}
export default meta

const Template: StoryFn<RadioGroupProps<Theme>> = ({
  value: valueProp,
  ...props
}) => {
  const [value, setValue] = useState<Theme | undefined>(() => valueProp)

  useEffect(function watchValueToChange() {
    setValue(valueProp)
  }, [valueProp])

  return (
    <RadioGroup
      value={value}
      onValueChange={setValue}
      {...props}
    >
      <Radio value={Theme.System}>{ Theme.System }</Radio>
      <Radio value={Theme.Light}>{ Theme.Light }</Radio>
      <Radio value={Theme.Dark}>{ Theme.Dark }</Radio>
    </RadioGroup>
  )
}

export const Primary = {
  render: Template,

  args: {
    value: Theme.System,
    disabled: false,
    required: false,
    direction: 'vertical',
    spacing: 0,
  },
}
