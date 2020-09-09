/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
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
  },
}

const Template = ({ ...otherProps }) => (
  <TabItem {...otherProps}>
    Tab Item
  </TabItem>
)

export const Primary = Template.bind({})

// @ts-ignore
Primary.args = {
  active: true,
  disabled: false,
  useIndicator: true,
  indicatorThickness: 3,
}
