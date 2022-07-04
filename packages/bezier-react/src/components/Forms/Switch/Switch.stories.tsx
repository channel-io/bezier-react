/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getObjectFromEnum, getTitle } from 'Utils/storyUtils'
import Switch from './Switch'
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
    onClick: {
      action: 'onClick',
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
