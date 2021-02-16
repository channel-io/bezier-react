/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../../utils/utils'
import ListItem from './ListItem'

export default {
  title: getTitle(base),
  component: ListItem,
  argTypes: {
    onClick: { control: { action: 'onClick' } },
    active: { control: { type: 'boolean' } },
  },
}

const Template = ({ ...otherListItemProps }) => (
  <div style={{ width: 240 }}>
    <ListItem
      optionKey="menu-item-0"
      {...otherListItemProps}
    />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  content: '전체 상태',
  leftIcon: 'dot',
  active: false,
}
