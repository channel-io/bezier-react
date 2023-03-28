/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import {
  type Meta,
  type Story,
} from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '~/src/utils/storyUtils'
import {
  type CheckboxProps,
  type CheckedState,
} from './Checkbox.types'
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

const Template: Story<CheckboxProps<CheckedState>> = ({ children, ...otherCheckboxProps }) => (
  <Checkbox {...otherCheckboxProps}>
    { children }
  </Checkbox>
)

export const Controlled = Template.bind({})
Controlled.args = {
  checked: true,
  disabled: false,
  required: false,
  hasError: false,
  children: 'Option',
}

export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  defaultChecked: true,
  disabled: false,
  required: false,
  hasError: false,
  children: 'Option',
}
