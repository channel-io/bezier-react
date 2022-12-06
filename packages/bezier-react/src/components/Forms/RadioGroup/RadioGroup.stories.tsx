/* External dependencies */
import React, { useState, useEffect } from 'react'
import { base } from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { RadioGroup } from './RadioGroup'
import { Radio } from './Radio'
import { RadioGroupProps } from './RadioGroup.types'

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
} as Meta<RadioGroupProps>

const Template: Story<RadioGroupProps> = ({
  value: valueProp,
  ...props
}) => {
  const [value, setValue] = useState(() => valueProp)

  useEffect(function watchValueToChange() {
    setValue(valueProp)
  }, [valueProp])

  return (
    <RadioGroup
      value={value}
      onValueChange={setValue}
      {...props}
    >
      <Radio value="System">System</Radio>
      <Radio value="Light">Light</Radio>
      <Radio value="Dark">Dark</Radio>
    </RadioGroup>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  value: 'System',
  disabled: false,
  required: false,
  direction: 'vertical',
  spacing: 0,
}
