/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { Icon, IconSize } from 'Components/Icon'
import { NavItem } from 'Components/Navigator/NavItem'
import NavGroup from './NavGroup'
import type NavGroupProps from './NavGroup.types'

export default {
  title: getTitle(base),
  component: NavGroup,
} as Meta

const Template: Story<NavGroupProps> = (args) => (
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

export const Primary: Story<NavGroupProps> = Template.bind({})

Primary.args = {
  open: true,
  active: false,
  name: 'general',
  content: '일반 설정',
  leftIcon: 'settings',
  rightContent: <Icon name="dot" size={IconSize.XS} color="bgtxt-orange-normal" />,
}
