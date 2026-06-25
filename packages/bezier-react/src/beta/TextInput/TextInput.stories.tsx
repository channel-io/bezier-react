import { GroupFilledIcon, SquaresIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { HStack } from '~/src/beta/HStack'
import { VStack } from '~/src/beta/VStack'

import { TextInput } from './TextInput'
import type { TextInputProps } from './TextInput.types'



const meta: Meta<typeof TextInput> = {
  title: 'Beta components/TextInput',
  component: TextInput,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['m', 'l'],
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary'],
    },
    type: {
      control: {
        type: 'select',
      },
      options: ['text', 'email', 'password', 'tel', 'url', 'number'],
    },
  },
}

export default meta

const Template: StoryFn<TextInputProps> = ({ ...args }) => (
  <TextInput {...args} />
)

export const Primary: StoryObj<TextInputProps> = {
  render: Template,

  args: {
    placeholder: 'placeholder',
    defaultValue: 'hong@company.com',
    size: 'm',
    variant: 'primary',
    type: 'text',
    disabled: false,
    readOnly: false,
    hasError: false,
  },
}

export const Variants: StoryObj<TextInputProps> = {
  render: (args) => (
    <VStack spacing={12}>
      {(['primary', 'secondary'] as const).map((variant) => (
        <HStack
          key={variant}
          spacing={8}
        >
          {(['m', 'l'] as const).map((size) => (
            <TextInput
              key={size}
              {...args}
              size={size}
              variant={variant}
            />
          ))}
        </HStack>
      ))}
    </VStack>
  ),

  args: {
    defaultValue: 'hong@company.com',
    placeholder: 'placeholder',
    disabled: false,
    readOnly: false,
    hasError: false,
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
}

export const SideContent: StoryObj<TextInputProps> = {
  render: (args) => (
    <VStack spacing={8}>
      <TextInput
        {...args}
        leadingContent="https://"
        trailingContent=".channel.io"
      />
      <TextInput
        {...args}
        leadingContent={GroupFilledIcon}
        trailingContent={SquaresIcon}
      />
    </VStack>
  ),

  args: {
    defaultValue: 'hong',
    size: 'm',
    variant: 'primary',
    placeholder: 'placeholder',
  },
}
