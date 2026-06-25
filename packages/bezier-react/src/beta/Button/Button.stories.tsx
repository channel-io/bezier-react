import { ArrowRightIcon, PlusIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { HStack } from '~/src/beta/HStack'
import { VStack } from '~/src/beta/VStack'

import { Button } from './Button'
import { type ButtonProps } from './Button.types'



const meta: Meta<typeof Button> = {
  title: 'Beta components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['filled', 'outlined', 'ghost'],
    },
    semantic: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary', 'destructive'],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['xs', 's', 'm', 'l'],
    },
  },
}

export default meta

const Template: StoryFn<ButtonProps> = ({ ...args }) => <Button {...args} />

export const Primary: StoryObj<ButtonProps> = {
  render: Template,

  args: {
    label: 'Button',
    variant: 'filled',
    semantic: 'primary',
    size: 'm',
    leadingContent: PlusIcon,
    trailingContent: ArrowRightIcon,
    active: false,
    loading: false,
    disabled: false,
  },
}

export const Variants: StoryObj<ButtonProps> = {
  render: (args) => (
    <VStack spacing={16}>
      {(['filled', 'outlined', 'ghost'] as const).map((variant) => (
        <HStack
          key={variant}
          spacing={8}
        >
          {(['primary', 'secondary', 'destructive'] as const).map(
            (semantic) => (
              <Button
                key={semantic}
                {...args}
                variant={variant}
                semantic={semantic}
                leadingContent={PlusIcon}
                trailingContent={ArrowRightIcon}
              />
            )
          )}
        </HStack>
      ))}
    </VStack>
  ),

  args: {
    label: 'Button',
    size: 'm',
    active: false,
    loading: false,
    disabled: false,
  },

  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
    semantic: {
      table: {
        disable: true,
      },
    },
  },
}

export const Sizes: StoryObj<ButtonProps> = {
  render: (args) => (
    <HStack
      spacing={8}
      align="center"
    >
      {(['xs', 's', 'm', 'l'] as const).map((size) => (
        <Button
          key={size}
          {...args}
          size={size}
          leadingContent={PlusIcon}
          trailingContent={ArrowRightIcon}
        />
      ))}
    </HStack>
  ),

  args: {
    label: 'Button',
    variant: 'filled',
    semantic: 'primary',
    active: false,
    loading: false,
    disabled: false,
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
}

export const Loading: StoryObj<ButtonProps> = {
  render: () => (
    <HStack
      spacing={8}
      align="center"
    >
      {(['xs', 's', 'm', 'l'] as const).map((size) => (
        <Button
          key={size}
          label="Button"
          size={size}
          loading
        />
      ))}
    </HStack>
  ),
}
