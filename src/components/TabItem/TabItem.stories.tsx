/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getObjectFromEnum, getTitle } from '../../utils/etcUtils'
import { TabsSize } from '../Tabs/Tabs.types'
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
        type: 'radio',
        options: getObjectFromEnum(TabsSize),
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
