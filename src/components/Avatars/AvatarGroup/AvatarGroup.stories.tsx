/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../../utils/etcUtils'
import { Avatar, AvatarSize } from '../Avatar'
import { AvatarSizeList } from '../Avatar/Avatar.stories'
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

export default {
  title: getTitle(base),
  component: AvatarGroup,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: AvatarSizeList,
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
}

const Template = (args) => (
  <AvatarGroup {...args}>
    { MOCK_AVATAR_LIST.map(({ avatarUrl, name }) => (
      <Avatar
        avatarUrl={avatarUrl}
        name={name}
      />
    )) }
  </AvatarGroup>
)

export const Primary = Template.bind({})
Primary.args = {
  max: 5,
  size: AvatarSize.XS,
  spacing: 4,
}
