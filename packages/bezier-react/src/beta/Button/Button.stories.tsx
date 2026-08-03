import { ArrowRightIcon, PlusIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { HStack } from '~/src/beta/HStack'
import { VStack } from '~/src/beta/VStack'

import { Button } from './Button'
import { type ButtonProps } from './Button.types'

const BUTTON_VARIANTS = ['filled', 'outlined', 'ghost', 'floating'] as const

const BUTTON_SEMANTICS = [
  'primary',
  'secondary',
  'destructive',
  'activate',
] as const

const BUTTON_STATES = [
  { label: 'Default' },
  { label: 'Active', active: true },
  { label: 'Disabled', disabled: true },
  { label: 'Loading', loading: true },
] as const

const meta: Meta<typeof Button> = {
  title: 'Beta components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: BUTTON_VARIANTS,
    },
    semantic: {
      control: {
        type: 'radio',
      },
      options: BUTTON_SEMANTICS,
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
  render: (args: ButtonProps) => (
    <VStack spacing={16}>
      {BUTTON_VARIANTS.map((variant) => (
        <HStack
          key={variant}
          spacing={8}
        >
          {BUTTON_SEMANTICS.map((semantic) => (
            <Button
              key={semantic}
              {...args}
              variant={variant}
              semantic={semantic}
              leadingContent={PlusIcon}
              trailingContent={ArrowRightIcon}
            />
          ))}
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

export const States: StoryObj<ButtonProps> = {
  render: () => (
    <VStack spacing={16}>
      {(['filled', 'floating'] as const).map((variant) => (
        <HStack
          key={variant}
          spacing={8}
          align="center"
        >
          {BUTTON_STATES.map(({ label, ...stateProps }) => (
            <Button
              key={label}
              label={label}
              variant={variant}
              semantic="activate"
              leadingContent={PlusIcon}
              {...stateProps}
            />
          ))}
        </HStack>
      ))}
    </VStack>
  ),
}

export const Sizes: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => (
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
