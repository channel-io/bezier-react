/* External dependencies */
import React, {
  useEffect,
  useState,
} from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '~/src/utils/storyUtils'

import { Radio } from './Radio'
import { RadioGroup } from './RadioGroup'
import { type RadioGroupProps } from './RadioGroup.types'

enum Theme {
  System = 'System',
  Light = 'Light',
  Dark = 'Dark',
}

export default {
  title: getTitle(base),
  component: RadioGroup,
  subcomponents: { Radio },
  argTypes: {
    direction: {
      control: {
        type: 'radio',
        options: ['vertical', 'horizontal'],
      },
    },
  },
} as Meta<RadioGroupProps<Theme>>

const Template: Story<RadioGroupProps<Theme>> = ({
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

export const Primary = Template.bind({})
Primary.args = {
  value: Theme.System,
  disabled: false,
  required: false,
  direction: 'vertical',
  spacing: 0,
}
