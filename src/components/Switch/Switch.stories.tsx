/* External dependencies */
import React from 'react'

/* Internal dependencies */
import Switch from './Switch'

export default {
  title: 'Switch',
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
