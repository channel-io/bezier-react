/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { StatusType } from 'Components/Status'
import EmojiAvatar from './EmojiAvatar'
import EmojiAvatarProps, { EmojiAvatarSize } from './EmojiAvatar.types'

const MOCK_EMOJI_URL = 'https://cf.exp.channel.io/asset/emoji/images/80/blush.png'

export default {
  title: getTitle(base),
  component: EmojiAvatar,
  argTypes: {
    avatarUrl: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<EmojiAvatarProps> = (args) => <EmojiAvatar {...args} />

export const Primary = Template.bind({})

Primary.args = {
  emojiUrl: MOCK_EMOJI_URL,
}

export const WithStatus = Template.bind({})

WithStatus.args = {
  emojiUrl: MOCK_EMOJI_URL,
  size: EmojiAvatarSize.Size30,
  status: StatusType.Online,
}
