import {
  type Meta,
  type StoryObj,
} from '@storybook/react'

import { Emoji } from './Emoji'
import { type EmojiProps } from './Emoji.types'

const MOCK_EMOJI_URL = 'https://cf.exp.channel.io/asset/emoji/images/80/blush.png'

const meta: Meta<typeof Emoji> = {
  component: Emoji,
  argTypes: {
    imageUrl: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

export const Primary: StoryObj<EmojiProps> = {
  args: {
    size: '24',
    imageUrl: MOCK_EMOJI_URL,
  },
}

