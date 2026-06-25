import { type Meta, type StoryObj } from '@storybook/react'

import { HStack } from '~/src/beta/HStack'
import { VStack } from '~/src/beta/VStack'

import { ProgressBar } from './ProgressBar'
import {
  type ProgressBarProps,
  type ProgressBarSize,
  type ProgressBarVariant,
} from './ProgressBar.types'



const meta: Meta<typeof ProgressBar> = {
  title: 'Beta components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['s', 'm'],
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['default', 'overlaid'],
    },
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    width: {
      control: 'text',
    },
  },
}

export default meta

export const Primary: StoryObj<ProgressBarProps> = {
  render: (args) => <ProgressBar {...args} />,

  args: {
    value: 0.6,
    size: 'm',
    variant: 'default',
    width: 144,
  },
}

export const Sizes: StoryObj<ProgressBarProps> = {
  render: (args) => (
    <VStack spacing={16}>
      {(['s', 'm'] as const).map((size: ProgressBarSize) => (
        <ProgressBar
          key={size}
          {...args}
          size={size}
        />
      ))}
    </VStack>
  ),

  args: {
    value: 0.6,
    variant: 'default',
    width: 144,
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
}

export const Variants: StoryObj<ProgressBarProps> = {
  render: (args) => (
    <HStack spacing={48}>
      {(['default', 'overlaid'] as const).map(
        (variant: ProgressBarVariant) => (
          <ProgressBar
            key={variant}
            {...args}
            variant={variant}
          />
        )
      )}
    </HStack>
  ),

  args: {
    value: 0.6,
    size: 'm',
    width: 144,
  },

  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
}
