/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { getTitle } from '../../../utils/etcUtils'
import { Avatar, AvatarSize } from '../Avatar'
import { AvatarGroupEllipsisType, AvatarGroupProps } from './AvatarGroup.types'
import AvatarGroup from './AvatarGroup'

const MOCK_AVATAR_LIST = [
  {
    avatarUrl: 'https://bit.ly/code-beast',
    name: 'Christian Nwamba',
  },
  {
    avatarUrl: 'https://bit.ly/tioluwani-kolawole',
    name: 'Kola Tioluwani',
  },
  {
    avatarUrl: 'https://bit.ly/kent-c-dodds',
    name: 'Kent Dodds',
  },
  {
    avatarUrl: 'https://bit.ly/ryan-florence',
    name: 'Ryan Florence',
  },
  {
    avatarUrl: 'https://bit.ly/dan-abramov',
    name: 'Dan Abrahmov',
  },
  {
    avatarUrl: 'https://bit.ly/prosper-baba',
    name: 'Prosper Otemuyiwa',
  },
  {
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
  },
} as Meta

const Template: Story<AvatarGroupProps> = (args) => (
  <AvatarGroup {...args}>
    { MOCK_AVATAR_LIST.map(({ avatarUrl, name }) => (
      <Avatar
        key={uuid()}
        avatarUrl={avatarUrl}
        name={name}
      />
    )) }
  </AvatarGroup>
)

export const Primary: Story<AvatarGroupProps> = Template.bind({})
Primary.args = {
  max: 5,
  size: AvatarSize.XS,
  ellipsisType: AvatarGroupEllipsisType.Icon,
  spacing: 4,
}
