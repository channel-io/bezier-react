import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { isNaN } from '~/src/utils/type'

import {
  Avatar,
  AvatarSize,
} from '~/src/components/Avatar'

import { AvatarGroup } from './AvatarGroup'
import { type AvatarGroupProps } from './AvatarGroup.types'
import MOCK_AVATAR_LIST from './__mocks__/avatarList'

const avatarSizeList = Object.keys(AvatarSize)
  .filter(value => isNaN(Number(value)) === true)
  .map(key => AvatarSize[key])

const meta: Meta<typeof AvatarGroup> = {
  component: AvatarGroup,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: avatarSizeList,
    },
    max: {
      control: {
        type: 'range',
        min: 1,
        max: MOCK_AVATAR_LIST.length,
        step: 1,
      },
    },
    spacing: {
      control: {
        type: 'range',
        min: -50,
        max: 50,
        step: 1,
      },
    },
    onMouseEnterEllipsis: {
      action: 'mouseEnter',
    },
    onMouseLeaveEllipsis: {
      action: 'mouseLeave',
    },
  },
}
export default meta

const Template: StoryFn<AvatarGroupProps> = (args) => (
  <AvatarGroup {...args}>
    { MOCK_AVATAR_LIST.map(({ id, avatarUrl, name }) => (
      <Avatar key={id} avatarUrl={avatarUrl} name={name} />
    )) }
  </AvatarGroup>
)

export const Primary: StoryObj<AvatarGroupProps> = {
  render: Template,

  args: {
    max: 5,
    size: AvatarSize.Size30,
    ellipsisType: 'icon',
    spacing: 4,
  },
}
