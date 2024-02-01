import {
  type Meta,
  type StoryObj,
} from '@storybook/react'

import { getObjectFromEnum } from '~/src/utils/story'

import { Emoji } from './Emoji'
import {
  type EmojiProps,
  EmojiSize,
} from './Emoji.types'

const MOCK_EMOJI_URL = 'https://cf.exp.channel.io/asset/emoji/images/80/blush.png'

const meta: Meta<typeof Emoji> = {
  component: Emoji,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: getObjectFromEnum(EmojiSize),
    },
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
    size: EmojiSize.Size24,
    imageUrl: MOCK_EMOJI_URL,
  },
}

