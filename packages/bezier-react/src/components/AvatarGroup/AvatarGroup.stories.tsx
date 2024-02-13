import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { Avatar } from '~/src/components/Avatar'

import { AvatarGroup } from './AvatarGroup'
import { type AvatarGroupProps } from './AvatarGroup.types'
import MOCK_AVATAR_LIST from './__mocks__/avatarList'

const meta: Meta<typeof AvatarGroup> = {
  component: AvatarGroup,
  argTypes: {
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
    size: '30',
    ellipsisType: 'icon',
    spacing: 4,
  },
}
