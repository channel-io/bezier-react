/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import TabItem from './TabItem'

export default {
  title: getTitle(base),
  component: TabItem,
  argTypes: {
    onClick: { control: { action: 'onClick' } },
    indicatorThickness: {
      control: {
        type: 'number',
      },
    },
    height: {
      control: {
        type: 'range',
        min: 29,
        max: 100,
        step: 1,
      },
    },
  },
}

const Template = ({ ...otherProps }) => (
  <TabItem {...otherProps}>
    Tab Item
  </TabItem>
)

export const Primary = Template.bind({})

Primary.args = {
  active: true,
  disabled: false,
  withIndicator: true,
  indicatorThickness: 3,
  height: 29,
}
