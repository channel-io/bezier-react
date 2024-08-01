import { type Meta, type StoryObj } from '@storybook/react'

import { Emoji } from './Emoji'
import { type EmojiProps } from './Emoji.types'

const meta = {
  component: Emoji,
} satisfies Meta<EmojiProps>

export default meta

export const Primary = {
  args: {
    size: '24',
    name: 'blush',
  },
} satisfies StoryObj<typeof meta>
