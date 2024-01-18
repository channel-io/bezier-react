import React from 'react'

import { InboxIcon } from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { ListItem } from './ListItem'
import {
  type ListItemProps,
  ListItemSize,
} from './ListItem.types'

const meta: Meta<typeof ListItem> = {
  component: ListItem,
}

const Template: StoryFn<ListItemProps> = (props) => (
  <div style={{ width: 400 }}>
    <ListItem {...props} />
  </div>
)

export const Primary: StoryObj<ListItemProps> = {
  render: Template,
  args: {
    size: ListItemSize.S,
    content: '상담이 열릴 때',
    leftContent: InboxIcon,
    description:
      '고객이 첫 메시지를 보내거나, 매니저가 상담을 다시 열거나, 자동으로 리오픈되면 트리거됩니다.',
  },
}

export default meta
