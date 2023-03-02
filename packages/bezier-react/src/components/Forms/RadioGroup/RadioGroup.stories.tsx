/* External dependencies */
import React, { useState, useEffect } from 'react'
import { base } from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { RadioGroup } from './RadioGroup'
import { Radio } from './Radio'
import { RadioGroupProps } from './RadioGroup.types'

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
