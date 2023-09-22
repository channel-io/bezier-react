import React from 'react'

import { ErrorFilledIcon } from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'

import NavItem from './NavItem'
import type NavItemProps from './NavItem.types'

export default {
  component: NavItem,
} as Meta

const Template: StoryFn<NavItemProps> = (args) => (
  <div style={{ width: '240px', padding: '6px' }}>
    <NavItem {...args} />
  </div>
)

export const Primary: StoryObj<NavItemProps> = {
  render: Template,

  args: {
    active: false,
    name: 'general',
    content: '일반 설정',
    href: 'https://google.com',
    leftIcon: undefined,
    rightContent: (
      <Icon
        source={ErrorFilledIcon}
        size={IconSize.XS}
        color="bgtxt-orange-normal"
      />
    ),
  },
}
