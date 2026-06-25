import { type Meta, type StoryObj } from '@storybook/react'


import { HStack } from '~/src/beta/HStack'

import { Status } from './Status'
import {
  type StatusProps,
  type StatusSize,
  type StatusType,
} from './Status.types'


const TYPES: StatusType[] = [
  'online',
  'offline',
  'online-dnd',
  'offline-dnd',
  'lock',
]

const SIZES: StatusSize[] = ['m', 'l']

const meta: Meta<typeof Status> = {
  title: 'Beta components/Status',
  component: Status,
  args: {
    type: 'online',
    size: 'm',
  },
  argTypes: {
    type: {
      control: 'select',
      options: TYPES,
    },
    size: {
      control: 'select',
      options: SIZES,
    },
  },
}

export default meta

type Story = StoryObj<StatusProps>

/**
 * Adjust `type` / `size` with the controls panel.
 */
export const Primary: Story = {
  render: (args) => (
    <HStack
      align="center"
      justify="center"
      width={200}
      height={200}
      backgroundColor="fill-neutral-light"
    >
      <Status {...args} />
    </HStack>
  ),
}

/**
 * Each type (based on the `m` size).
 */
export const Types: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <HStack
      align="center"
      spacing={16}
    >
      {TYPES.map((type) => (
        <Status
          key={type}
          type={type}
        />
      ))}
    </HStack>
  ),
}

/**
 * Each size (based on the `online` type).
 */
export const Sizes: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <HStack
      align="center"
      spacing={16}
    >
      {SIZES.map((size) => (
        <Status
          key={size}
          type="online"
          size={size}
        />
      ))}
    </HStack>
  ),
}
