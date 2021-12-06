/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getObjectFromEnum, getTitle } from 'Utils/storyUtils'
import { TabsSize } from 'Components/Tabs'
import TabItem from './TabItem'
import TabItemProps from './TabItem.types'

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
} as Meta

const Template: Story<TabItemProps> = (args) => (
  <TabItem {...args}>
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
