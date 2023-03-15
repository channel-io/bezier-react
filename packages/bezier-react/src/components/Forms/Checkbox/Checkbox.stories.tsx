/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { CheckboxProps } from './Checkbox.types'
import { Checkbox } from './Checkbox'

export default {
  title: getTitle(base),
  component: Checkbox,
  argTypes: {
    checked: {
      control: {
        type: 'radio',
        options: [
          true,
          false,
          'indeterminate',
        ],
      },
    },
  },
} as Meta

const ControlledTemplate: Story<CheckboxProps> = ({ children, ...otherCheckboxProps }) => (
  <Checkbox {...otherCheckboxProps}>
    { children }
  </Checkbox>
)

export const Controlled = ControlledTemplate.bind({})
Controlled.args = {
  checked: true,
  disabled: false,
  children: 'Option',
}

const UncontrolledTemplate: Story<CheckboxProps> = ({ children, defaultChecked }) => (
  <Checkbox defaultChecked={defaultChecked}>
    { children }
  </Checkbox>
)

export const Uncontrolled = UncontrolledTemplate.bind({})
Uncontrolled.args = {
  defaultChecked: true,
  disabled: false,
  children: 'Option',
}
