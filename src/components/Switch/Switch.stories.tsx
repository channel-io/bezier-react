/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import Switch from './Switch'
import SwitchProps from './Switch.types'

export default {
  title: getTitle(base),
  component: Switch,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}

const Template = ({ ...otherSwitchProps }) => <Switch {...otherSwitchProps} />

export const Primary = Template.bind({})
Primary.args = {
  size: 16,
  checked: true,
  disabled: false,
}
