/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '../../../utils/storyUtils'
import Switch from './Switch'
import SwitchProps from './Switch.types'

export default {
  title: getTitle(base),
  component: Switch,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<SwitchProps> = ({ ...otherSwitchProps }) => <Switch {...otherSwitchProps} />

export const Primary = Template.bind({})
Primary.args = {
  size: 16,
  checked: true,
  disabled: false,
}
