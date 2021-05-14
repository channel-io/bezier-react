/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '../../../utils/storyUtils'
import { Avatar, AvatarSize } from '../Avatar'
import AvatarGroupProps, { AvatarGroupEllipsisType } from './AvatarGroup.types'
import AvatarGroup from './AvatarGroup'

const MOCK_AVATAR_LIST = [
  {
    id: 1,
    avatarUrl: 'https://bit.ly/code-beast',
    name: 'Christian Nwamba',
  },
  {
    id: 2,
    avatarUrl: 'https://bit.ly/tioluwani-kolawole',
    name: 'Kola Tioluwani',
  },
  {
    id: 3,
    avatarUrl: 'https://bit.ly/kent-c-dodds',
    name: 'Kent Dodds',
  },
  {
    id: 4,
    avatarUrl: 'https://bit.ly/ryan-florence',
    name: 'Ryan Florence',
  },
  {
    id: 5,
    avatarUrl: 'https://bit.ly/dan-abramov',
    name: 'Dan Abrahmov',
  },
  {
    id: 6,
    avatarUrl: 'https://bit.ly/prosper-baba',
    name: 'Prosper Otemuyiwa',
  },
  {
    id: 7,
    avatarUrl: 'https://bit.ly/sage-adebayo',
    name: 'Segun Adebayo',
  },
]

const avatarSizeList = Object.keys(AvatarSize)
  .filter(value => Number.isNaN(Number(value)) === true)
  .map(key => AvatarSize[key])

export default {
  title: getTitle(base),
  component: AvatarGroup,
  argTypes: {
    ellipsisType: {
      control: {
        type: 'radio',
        options: AvatarGroupEllipsisType,
      },
    },
    size: {
      control: {
        type: 'radio',
        options: avatarSizeList,
      },
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
} as Meta

const Template: Story<AvatarGroupProps> = (args) => (
  <AvatarGroup {...args}>
    { MOCK_AVATAR_LIST.map(({ id, avatarUrl, name }) => (
      <Avatar
        key={id}
        avatarUrl={avatarUrl}
        name={name}
      />
    )) }
  </AvatarGroup>
)

export const Primary: Story<AvatarGroupProps> = Template.bind({})
Primary.args = {
  max: 5,
  size: AvatarSize.Size30,
  ellipsisType: AvatarGroupEllipsisType.Icon,
  spacing: 4,
}
