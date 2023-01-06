/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Meta, Story } from '@storybook/react'
import { styled } from '~/src/foundation'
import { getTitle, getObjectFromEnum } from '~/src/utils/storyUtils'

/* Internal dependencies */
import Emoji from './Emoji'
import EmojiProps, { EmojiSize } from './Emoji.types'

const MOCK_EMOJI_URL = 'https://cf.exp.channel.io/asset/emoji/images/80/blush.png'

export default {
  title: getTitle(base),
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
} as Meta

const Template: Story<EmojiProps> = (args) => <Emoji {...args} />

export const Primary = Template.bind({})

Primary.args = {
  size: EmojiSize.Size24,
  imageUrl: MOCK_EMOJI_URL,
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

const HoverTemplate: Story<EmojiProps> = (args) => (
  <Wrapper>
    <Emoji {...args} />
  </Wrapper>
)

export const WithHover = HoverTemplate.bind({})

WithHover.args = {
  size: EmojiSize.Size24,
  imageUrl: MOCK_EMOJI_URL,
}

const MultipleTemplate: Story<EmojiProps> = (args) => (
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

export const WithMultipleEmoji = MultipleTemplate.bind({})

WithMultipleEmoji.args = {
  size: EmojiSize.Size24,
  imageUrl: MOCK_EMOJI_URL,
}
