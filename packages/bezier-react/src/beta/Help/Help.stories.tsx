import type { Meta, StoryObj } from '@storybook/react'

import { HStack } from '~/src/beta/HStack'
import { Text } from '~/src/beta/Text'
import { VStack } from '~/src/beta/VStack'

import { Help } from './Help'

const HELP_SIZES = ['10', '12', '16', '20', '24', '36', '44'] as const

const meta: Meta<typeof Help> = {
  title: 'Beta components/Help',
  component: Help,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: HELP_SIZES,
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

export const Primary: StoryObj<typeof Help> = {
  args: {
    children: 'This is help text.',
  },
}

export const Sizes: StoryObj<typeof Help> = {
  render: (args) => (
    <HStack
      spacing={24}
      align="center"
    >
      {HELP_SIZES.map((size) => (
        <VStack
          key={size}
          spacing={8}
          align="center"
        >
          <Help
            {...args}
            size={size}
          />
          <Text
            typo="12"
            color="text-neutral"
          >
            {size}px
          </Text>
        </VStack>
      ))}
    </HStack>
  ),
  args: {
    children: 'Learn more about this setting.',
  },
}
