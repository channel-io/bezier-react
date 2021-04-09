/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { styled } from '../../foundation'
import { getTitle } from '../../utils/etcUtils'
import Avatar, { AvatarGroup } from './Avatar'
import { AvatarSize, StatusType } from './Avatar.types'

const PRIMARY_AVATAR_URL = 'https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png'

const MOCK_AVATAR_DATA = [
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

const AvatarSizeList = Object.keys(AvatarSize)
  .filter(value => Number.isNaN(Number(value)) === true)
  .map(key => AvatarSize[key])

export default {
  title: getTitle(base),
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: AvatarSizeList,
      },
    },
  },
}

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  padding: 20px;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-light']};
`

const AvatarList = (() => (
  AvatarSizeList.map((size, index) => {
    const { avatarUrl, name } = MOCK_AVATAR_DATA[index % (MOCK_AVATAR_DATA.length - 1)]
    return (
      <Avatar
        key={uuid()}
        avatarUrl={avatarUrl}
        name={name}
        size={size}
      />
    )
  })
))()

const Template = (args) => (
  <Wrapper>
    <Avatar
      avatarUrl={PRIMARY_AVATAR_URL}
      size={AvatarSize.XS}
      showStatus
      status={StatusType.ONLINE}
    />
    <Avatar {...args} />
    { AvatarList }
  </Wrapper>
)

export const Primary = Template.bind({})
Primary.args = {
  avatarUrl: PRIMARY_AVATAR_URL,
  name: 'Channel',
  size: AvatarSize.M,
  showBorder: false,
  disabled: false,
}

const TemplateAvatarGroup = (args) => (
  <AvatarGroup {...args}>
    { AvatarList }
  </AvatarGroup>
)

export const PrimaryAvatarGroup = TemplateAvatarGroup.bind({})
PrimaryAvatarGroup.args = {
  max: 5,
  size: AvatarSize.XS,
  spacing: 4,
}
