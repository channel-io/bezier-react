import React from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { Checkbox } from './Checkbox'
import {
  type CheckboxProps,
  type CheckedState,
} from './Checkbox.types'

export default {
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

const Template: StoryFn<CheckboxProps<CheckedState>> = ({
  children,
  ...otherCheckboxProps
}) => <Checkbox {...otherCheckboxProps}>{ children }</Checkbox>

export const Controlled = {
  render: Template,

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
