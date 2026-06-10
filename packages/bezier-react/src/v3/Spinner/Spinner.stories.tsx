import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { HStack } from '~/src/v3/HStack'

import { Spinner } from './Spinner'
import { type SpinnerProps } from './Spinner.types'

const meta: Meta<typeof Spinner> = {
  title: 'V3 components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['xs', 's', 'm', 'l', 'xl'],
    },
  },
}
export default meta

const Template: StoryFn<SpinnerProps> = ({ ...args }) => <Spinner {...args} />

export const Primary = {
  render: Template,

  args: {
    size: 'm',
  },
}

export const Sizes: StoryObj<SpinnerProps> = {
  render: (args) => (
    <HStack
      spacing={16}
      align="center"
    >
      {(['xs', 's', 'm', 'l', 'xl'] as const).map((size) => (
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
