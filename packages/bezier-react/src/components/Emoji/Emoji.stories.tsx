import React from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import { getObjectFromEnum } from '~/src/utils/storyUtils'

import Emoji from './Emoji'
import type EmojiProps from './Emoji.types'
import { EmojiSize } from './Emoji.types'

const MOCK_EMOJI_URL = 'https://cf.exp.channel.io/asset/emoji/images/80/blush.png'

const meta: Meta<typeof Emoji> = {
  component: Emoji,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(EmojiSize),
      },
    },
    imageUrl: {
      control: {
        type: 'text',
      },
    },
  },
}
export default meta

export const Primary = {
  args: {
    size: EmojiSize.Size24,
    imageUrl: MOCK_EMOJI_URL,
  },
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  border-radius: ${({ foundation }) => foundation?.rounding.round4};

  &:hover {
    background-color: ${({ foundation }) => foundation?.theme['bg-black-light']};
  }
`

const HoverTemplate: StoryFn<EmojiProps> = (args) => (
  <Wrapper>
    <Emoji {...args} />
  </Wrapper>
)

export const WithHover = {
  render: HoverTemplate,

  args: {
    size: EmojiSize.Size24,
    imageUrl: MOCK_EMOJI_URL,
  },
}

const MultipleTemplate: StoryFn<EmojiProps> = (args) => (
  <>
    <Wrapper>
      <Emoji {...args} />
    </Wrapper>
    <Wrapper>
      <Emoji {...args} />
    </Wrapper>
    <Wrapper>
      <Emoji {...args} />
    </Wrapper>
    <Wrapper>
      <Emoji {...args} />
    </Wrapper>
    <Wrapper>
      <Emoji {...args} />
    </Wrapper>
  </>
)

export const WithMultipleEmoji = {
  render: MultipleTemplate,

  args: {
    size: EmojiSize.Size24,
    imageUrl: MOCK_EMOJI_URL,
  },
}
