import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { HStack } from '~/src/v3/HStack'

import { Spinner } from './Spinner'
import { type SpinnerProps } from './Spinner.types'

const SPINNER_SIZES = [
  '10',
  '12',
  '16',
  '20',
  '24',
  '30',
  '36',
  '42',
  '48',
] as const

const meta: Meta<typeof Spinner> = {
  title: 'V3 components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: SPINNER_SIZES,
    },
  },
}
export default meta

const Template: StoryFn<SpinnerProps> = ({ ...args }) => <Spinner {...args} />

export const Primary = {
  render: Template,

  args: {
    size: '20',
  },
}

export const Sizes: StoryObj<SpinnerProps> = {
  render: (args) => (
    <HStack
      spacing={16}
      align="center"
    >
      {SPINNER_SIZES.map((size) => (
        <Spinner
          key={size}
          {...args}
          size={size}
        />
      ))}
    </HStack>
  ),

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
}
