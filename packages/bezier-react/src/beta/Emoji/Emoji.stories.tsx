import { ChannelBtnFilledIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'


import { HStack } from '~/src/beta/HStack'
import { Icon } from '~/src/beta/Icon'
import { Text } from '~/src/beta/Text'
import { VStack } from '~/src/beta/VStack'

import { Emoji } from './Emoji'
import type { EmojiProps, EmojiSize } from './Emoji.types'


const SIZES: EmojiSize[] = [
  '16',
  '20',
  '24',
  '30',
  '36',
  '42',
  '48',
  '60',
  '72',
  '90',
  '120',
]

const meta: Meta<typeof Emoji> = {
  title: 'Beta components/Emoji',
  component: Emoji,
  args: {
    name: 'smile',
    size: '24',
  },
  argTypes: {
    name: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: SIZES,
      table: {
        defaultValue: { summary: '"24"' },
      },
    },
  },
}

export default meta

type Story = StoryObj<EmojiProps>

export const Primary: Story = {}

export const Sizes: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <VStack spacing={12}>
      {SIZES.map((size) => (
        <HStack
          key={size}
          align="center"
          spacing={24}
        >
          <Text
            typo="12"
            color="text-neutral"
            style={{ width: 32 }}
          >
            {size}
          </Text>
          <Emoji
            name="smile"
            size={size}
          />
        </HStack>
      ))}
    </VStack>
  ),
}

export const WithIcon: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <HStack
      align="center"
      spacing={12}
    >
      <Emoji
        name="smile"
        size="24"
      />
      <Icon
        source={ChannelBtnFilledIcon}
        size="24"
      />
    </HStack>
  ),
}
