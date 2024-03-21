import React from 'react'

import { type Meta, type StoryFn } from '@storybook/react'

import { Switch } from './Switch'
import { type SwitchProps } from './Switch.types'

const meta: Meta<typeof Switch> = {
  component: Switch,
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onCheckedChange: {
      action: 'onCheckedChange',
    },
  },
}
export default meta

const Template: StoryFn<SwitchProps> = ({ ...otherSwitchProps }) => (
  <Switch {...otherSwitchProps} />
)

export const Primary = {
  render: Template,

  args: {
    size: 'm',
    checked: true,
    disabled: false,
  },
}

export const Uncontrolled = {
  render: Template,

  args: {
    size: 'm',
    disabled: false,
  },
}
