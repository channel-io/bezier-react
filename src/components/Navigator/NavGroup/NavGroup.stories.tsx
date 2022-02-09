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
  <div style={{ width: '240px', padding: '6px' }}>
    <NavGroup {...args}>
      <NavItem
        name="profile"
        content="채널 프로필"
      />
      <NavItem
        name="btn"
        content="버튼 설치 및 설정"
      />
    </NavGroup>
  </div>
)

export const Primary: Story<NavGroupProps> = Template.bind({})

Primary.args = {
  open: true,
  name: 'general',
  content: '일반 설정',
  leftIcon: 'settings',
  leftIconColor: 'txt-black-dark',
  rightContent: <Icon name="dot" size={IconSize.XS} color="bgtxt-orange-normal" />,
}
