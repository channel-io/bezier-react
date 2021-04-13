/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from '../../../foundation'
import { getTitle } from '../../../utils/etcUtils'
import { StatusType } from '../../Status'
import Avatar from './Avatar'
import { AvatarProps, AvatarSize } from './Avatar.types'

const MOCK_AVATAR_URL = 'https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png'

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
    status: {
      control: {
        type: 'radio',
        options: StatusType,
      },
    },
  },
} as Meta

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-light']};
`

const Template: Story<AvatarProps> = (args) => (
  <Wrapper>
    <Avatar {...args} />
  </Wrapper>
)

export const Primary: Story<AvatarProps> = Template.bind({})
Primary.args = {
  avatarUrl: MOCK_AVATAR_URL,
  name: 'Channel',
  size: AvatarSize.XS,
  showStatus: true,
  status: StatusType.NONE,
  showBorder: false,
  disabled: false,
}
