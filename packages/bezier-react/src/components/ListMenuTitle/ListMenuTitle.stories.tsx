import React from 'react'

import { SendForwardIcon } from '@channel.io/bezier-icons'
import {
  type Meta,
  type Story,
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

const Template: Story<ListMenuTitleProps> = ({
  rightAction = (<div><Icon source={SendForwardIcon} size={IconSize.XS} /></div>),
  ...otherListItemProps
}) => (
  <div style={{ width: 240 }}>
    <ListMenuTitle
      rightAction={rightAction}
      {...otherListItemProps}
    />
  </div>

)

export const Primary = Template.bind({})

Primary.args = {
  content: 'this is title',
}
