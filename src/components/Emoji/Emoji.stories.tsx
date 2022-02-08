/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Meta, Story } from '@storybook/react'
import { styled } from 'Foundation'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import Emoji from './Emoji'
import EmojiProps from './Emoji.types'

const MOCK_EMOJI_URL = 'https://cf.exp.channel.io/asset/emoji/images/80/blush.png'

export default {
  title: getTitle(base),
  component: Emoji,
  argTypes: {
    avatarUrl: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<EmojiProps> = (args) => <Emoji {...args} />

export const Primary = Template.bind({})

Primary.args = {
  imageUrl: MOCK_EMOJI_URL,
}

const Wrapper = styled.div`
  border-radius: ${({ foundation }) => foundation?.rounding.round4};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

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
  imageUrl: MOCK_EMOJI_URL,
}
