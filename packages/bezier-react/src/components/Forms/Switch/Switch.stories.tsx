import React from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { getObjectFromEnum } from '~/src/utils/story'

import { Switch } from './Switch'
import type SwitchProps from './Switch.types'
import { SwitchSize } from './Switch.types'

const meta: Meta<typeof Switch> = {
  component: Switch,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: getObjectFromEnum(SwitchSize),
    },
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
    size: SwitchSize.M,
    checked: true,
    disabled: false,
  },
}

export const Uncontrolled = {
  render: Template,

  args: {
    size: SwitchSize.M,
    disabled: false,
  },
}
