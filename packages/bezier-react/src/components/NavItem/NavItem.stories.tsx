import React from 'react'

import { ErrorFilledIcon } from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { Icon } from '~/src/components/Icon'

import { NavItem } from './NavItem'
import type { NavItemProps } from './NavItem.types'

const meta: Meta = {
  component: NavItem,
}
export default meta

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
    leftContent: undefined,
    rightContent: (
      <Icon
        source={ErrorFilledIcon}
        size="xs"
        color="bgtxt-orange-normal"
      />
    ),
  },
}
