/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import {
  type Meta,
  type Story,
} from '@storybook/react'

/* Internal dependencies */
import {
  getObjectFromEnum,
  getTitle,
} from '~/src/utils/storyUtils'
import { Switch } from './Switch'
import type SwitchProps from './Switch.types'
import { SwitchSize } from './Switch.types'

export default {
  title: getTitle(base),
  component: Switch,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(SwitchSize),
      },
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
} as Meta

const Template: Story<SwitchProps> = ({ ...otherSwitchProps }) => <Switch {...otherSwitchProps} />

export const Primary = Template.bind({})
Primary.args = {
  size: SwitchSize.M,
  checked: true,
  disabled: false,
}

export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  size: SwitchSize.M,
  disabled: false,
}
