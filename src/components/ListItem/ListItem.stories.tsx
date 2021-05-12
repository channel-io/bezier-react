/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { iconList } from '../../utils/storyUtils'
import { getTitle } from '../../utils/etcUtils'
import ListItem from './ListItem'
import { ListItemSize } from './ListItem.types'

export default {
  title: getTitle(base),
  component: ListItem,
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 50,
        max: 500,
        step: 1,
      },
    },
    active: { control: { type: 'boolean' } },
    leftIcon: { control: { type: 'select', options: [...iconList, undefined] } },
    size: { control: { type: 'select', options: ListItemSize } },
  },
}

const Template = ({ width, ...otherListItemProps }) => (
  <div style={{ width }}>
    <ListItem
      optionKey="menu-item-0"
      {...otherListItemProps}
    />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  width: 388,
  size: ListItemSize.M,
  content: '상담이 열릴 때',
  description: '고객이 첫 메시지를 보내거나, 매니저가 상담을 다시 열거나, 자동으로 리오픈되면 트리거됩니다.',
  rightContent: '',
  leftIcon: 'inbox',
  active: false,
  disableIconActive: false,
  descriptionMaxLines: 0,
}
