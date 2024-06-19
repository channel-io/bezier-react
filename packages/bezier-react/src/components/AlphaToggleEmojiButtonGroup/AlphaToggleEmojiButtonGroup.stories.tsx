import React from 'react'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Center } from '~/src/components/Center'
import { Emoji } from '~/src/components/Emoji'

import {
  ToggleEmojiButtonGroup,
  ToggleEmojiButtonSource,
} from './ToggleEmojiButtonGroup'
import type {
  ToggleEmojiButtonGroupProps,
  ToggleEmojiButtonSourceProps,
} from './ToggleEmojiButtonGroup.types'

const meta: Meta<typeof ToggleEmojiButtonGroup> = {
  component: ToggleEmojiButtonGroup,
}
export default meta

type ToggleButtonCompositionType = ToggleEmojiButtonGroupProps &
  Pick<ToggleEmojiButtonSourceProps, 'variant' | 'loading'>

const Template: StoryFn<ToggleButtonCompositionType> = ({
  fillDirection,
  variant,
  loading,
}) => (
  <Center
    width="25vw"
    height="15vh"
    backgroundColor="bg-lounge"
  >
    <ToggleEmojiButtonGroup fillDirection={fillDirection}>
      <ToggleEmojiButtonSource
        variant={variant}
        loading={loading}
        content={
          <Emoji
            name="channel"
            size="30"
            imageUrl="https://cf.exp.channel.io/asset/emoji/images/80/blush.png"
          />
        }
      />
      <ToggleEmojiButtonSource
        variant={variant}
        loading={loading}
        content={
          <Emoji
            name="channel"
            size="30"
            imageUrl="https://cf.exp.channel.io/asset/emoji/images/80/blush.png"
          />
        }
      />
    </ToggleEmojiButtonGroup>
  </Center>
)

export const Primary = {
  render: Template,

  args: {
    fillDirection: 'all',
    variant: 'primary',
    loading: false,
  },
} satisfies StoryObj<ToggleButtonCompositionType>
