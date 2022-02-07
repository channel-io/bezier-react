/* External dependencies */
import React, { useMemo } from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { Icon, IconSize } from 'Components/Icon'
import { TagBadgeSize, TagBadgeVariant, Badge } from 'Components/TagBadge'
import NavItem from './NavItem'
import type NavItemProps from './NavItem.types'

export default {
  title: getTitle(base),
  component: NavItem,
} as Meta

const Template: Story<NavItemProps> = (args) => {
  const badge = useMemo(() => (
    <Badge
      size={TagBadgeSize.M}
      variant={TagBadgeVariant.Green}
    >
      Trial
    </Badge>
  ), [])

  return (
    <div style={{ width: '240px', padding: '6px' }}>
      <NavItem {...args} key="general">
        <NavItem content="채널 프로필" />
        <NavItem content="버튼 설치 및 설정" />
        <NavItem content="고객 프로필 데이터" />
      </NavItem>
      <NavItem
        key="member"
        open
        name="member"
        content="채널 프로필"
        leftIcon="group-filled"
      >
        <NavItem content="멤버" />
        <NavItem content="팀" />
        <NavItem content="역할" />
        <NavItem content="봇" />
      </NavItem>
      <NavItem
        key="service"
        open={false}
        name="service"
        content="서비스 구독 및 결제"
        leftIcon="coin"
        rightContent={badge}
      >
        <NavItem content="멤버" />
      </NavItem>
      <NavItem
        key="chat"
        open={false}
        name="chat"
        content="상담"
        leftIcon="chat-progress"
      >
        <NavItem content="멤버" />
      </NavItem>
      <NavItem
        key="integration"
        open={false}
        name="integration"
        content="연동"
        leftIcon="transfer"
      >
        <NavItem content="멤버" />
      </NavItem>
      <NavItem
        key="resource"
        open={false}
        name="resource"
        content="리소스"
        leftIcon="book"
      >
        <NavItem content="멤버" />
      </NavItem>
      <NavItem
        key="security"
        open={false}
        name="security"
        content="보안 및 개발"
        leftIcon="tool"
      >
        <NavItem content="멤버" />
      </NavItem>
    </div>
  )
}

export const Primary: Story<NavItemProps> = Template.bind({})

Primary.args = {
  open: true,
  active: false,
  name: 'general',
  content: '일반 설정',
  leftIcon: 'settings',
  leftIconColor: 'txt-black-dark',
  rightContent: <Icon name="error-filled" size={IconSize.XS} color="bgtxt-orange-normal" />,
}
