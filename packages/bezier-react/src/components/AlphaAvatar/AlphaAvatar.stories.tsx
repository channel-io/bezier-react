import React from 'react'

import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'
import type { AvatarProps } from './Avatar.types'

const MOCK_AVATAR_URL =
  'https://cf.channel.io/thumb/200x200/pub-file/1/65fc43ee585607b276f6/tmp-3329819395'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    onMouseEnter: {
      action: 'mouseEnter',
    },
    onMouseLeave: {
      action: 'mouseLeave',
    },
  },
}
export default meta

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />

export const Primary: StoryObj<AvatarProps> = {
  render: Template,

  args: {
    avatarUrl: MOCK_AVATAR_URL,
    name: 'Channel',
    size: '24',
    showBorder: false,
    disabled: false,
    smoothCorners: true,
  },
}

const TemplateWithCustomStatus: StoryFn<AvatarProps> = (args) => (
  <Avatar {...args}>
    <Avatar
      avatarUrl="https://bit.ly/kent-c-dodds"
      name="Kent Dodds"
      size="20"
      showBorder
    />
  </Avatar>
)

export const WithCustomStatus: StoryObj<AvatarProps> = {
  render: TemplateWithCustomStatus,

  args: {
    avatarUrl: MOCK_AVATAR_URL,
    name: 'Channel',
    size: '48',
    showBorder: false,
    disabled: false,
  },
}
