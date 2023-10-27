import React from 'react'

import {
  DotIcon,
  SettingsIcon,
} from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { NavItem } from '~/src/components/Navigator/NavItem'

import NavGroup from './NavGroup'
import type NavGroupProps from './NavGroup.types'

const meta: Meta<typeof NavGroup> = {
  component: NavGroup,
}
export default meta

const Template: StoryFn<NavGroupProps> = (args) => (
  <nav
    style={{ width: '240px', padding: '6px' }}
    aria-label="navgroup storybook"
  >
    <ul style={{ margin: '0', padding: '0' }} role="menubar">
      <NavGroup {...args}>
        <NavItem
          name="profile"
          content="채널 프로필"
          href="https://naver.com"
          target="_parent"
        />
        <NavItem
          name="btn"
          content="버튼 설치 및 설정"
          href="https://google.com"
          target="_self"
        />
      </NavGroup>
    </ul>
  </nav>
)

export const Primary: StoryObj<NavGroupProps> = {
  render: Template,

  args: {
    open: true,
    active: false,
    name: 'general',
    content: '일반 설정',
    leftIcon: SettingsIcon,
    rightContent: (
      <Icon source={DotIcon} size={IconSize.XS} color="bgtxt-orange-normal" />
    ),
  },
}
