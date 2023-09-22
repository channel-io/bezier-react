import React from 'react'

import { SendForwardIcon } from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'

import ListMenuTitle from './ListMenuTitle'
import type ListMenuTitleProps from './ListMenuTitle.types'

export default {
  component: ListMenuTitle,
} as Meta

const Template: StoryFn<ListMenuTitleProps> = ({
  rightAction = (
    <div>
      <Icon source={SendForwardIcon} size={IconSize.XS} />
    </div>
  ),
  ...otherListItemProps
}) => (
  <div style={{ width: 240 }}>
    <ListMenuTitle
      rightAction={rightAction}
      {...otherListItemProps}
    />
  </div>
)

export const Primary = {
  render: Template,

  args: {
    content: 'this is title',
  },
}
