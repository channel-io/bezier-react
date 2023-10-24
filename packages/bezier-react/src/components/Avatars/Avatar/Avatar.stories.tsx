import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import { isNaN } from '~/src/utils/typeUtils'

import { StatusType } from '~/src/components/Status'

import { Avatar } from './Avatar'
import type AvatarProps from './Avatar.types'
import { AvatarSize } from './Avatar.types'

const MOCK_AVATAR_URL = 'https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png'

const avatarSizeList = Object.keys(AvatarSize)
  .filter(value => isNaN(Number(value)) === true)
  .map(key => AvatarSize[key])

const statusTypeList = Object.keys(StatusType)
  .map(key => StatusType[key])

const meta:Meta<typeof Avatar> = {
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: avatarSizeList,
    },
    status: {
      control: {
        type: 'radio',
      },
      options: [
        undefined,
        ...statusTypeList,
      ],
    },
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

// NOTE: (@ed) border 색상을 명확하게 보여주기 위해 회색의 Wrapper를 추가했습니다
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-light']};
`

const Template: StoryFn<AvatarProps> = (args) => (
  <Wrapper>
    <Avatar {...args} />
  </Wrapper>
)

export const Primary: StoryObj<AvatarProps> = {
  render: Template,

  args: {
    avatarUrl: MOCK_AVATAR_URL,
    name: 'Channel',
    size: AvatarSize.Size24,
    showBorder: false,
    disabled: false,
    smoothCorners: true,
  },
}

const TemplateWithCustomStatus: StoryFn<AvatarProps> = (args) => (
  <Wrapper>
    <Avatar {...args}>
      <Avatar
        avatarUrl="https://bit.ly/kent-c-dodds"
        name="Kent Dodds"
        size={AvatarSize.Size20}
        showBorder
      />
    </Avatar>
  </Wrapper>
)

export const WithCustomStatus: StoryObj<AvatarProps> = {
  render: TemplateWithCustomStatus,

  args: {
    avatarUrl: MOCK_AVATAR_URL,
    name: 'Channel',
    size: AvatarSize.Size48,
    showBorder: false,
    disabled: false,
  },
}
