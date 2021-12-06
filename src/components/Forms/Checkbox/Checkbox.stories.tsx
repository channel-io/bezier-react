/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import Checkbox from './Checkbox'
import CheckboxProps from './Checkbox.types'
import CheckType from './CheckType'

export default {
  title: getTitle(base),
  component: Checkbox,
  argTypes: {
    onClick: { control: { action: 'onClick' } },
    checked: {
      control: {
        type: 'radio',
        options: [
          CheckType.True,
          CheckType.False,
          CheckType.Partial,
        ],
      },
    },
  },
} as Meta

const Template: Story<CheckboxProps> = ({ children, ...otherCheckboxProps }) => (
  <Checkbox {...otherCheckboxProps}>
    { children }
  </Checkbox>
)

export const Primary = Template.bind({})
Primary.args = {
  checked: CheckType.True,
  disabled: false,
  children: 'Check Me!',
}
