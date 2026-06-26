import { ChevronDownIcon, PlusIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { HStack } from '~/src/beta/HStack'
import { VStack } from '~/src/beta/VStack'

import { IconButton } from './IconButton'
import { type IconButtonProps } from './IconButton.types'



const meta: Meta<typeof IconButton> = {
  title: 'Beta components/IconButton',
  component: IconButton,
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

const Template: StoryFn<IconButtonProps> = ({ ...args }) => (
  <IconButton {...args} />
)

export const Primary: StoryObj<IconButtonProps> = {
  render: Template,

  args: {
    content: PlusIcon,
    'aria-label': 'Add',
    variant: 'ghost',
    semantic: 'secondary',
    size: 'm',
    active: false,
    loading: false,
    disabled: false,
  },
}

export const Variants: StoryObj<IconButtonProps> = {
  render: (args: IconButtonProps) => (
    <VStack spacing={16}>
      {(['filled', 'outlined', 'ghost'] as const).map((variant) => (
        <HStack
          key={variant}
          spacing={8}
        >
          {(['primary', 'secondary', 'destructive'] as const).map(
            (semantic) => (
              <IconButton
                key={semantic}
                {...args}
                variant={variant}
                semantic={semantic}
                content={PlusIcon}
                aria-label={`${semantic} ${variant}`}
              />
            )
          )}
        </HStack>
      ))}
    </VStack>
  ),

  args: {
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
    content: {
      table: {
        disable: true,
      },
    },
  },
}

export const Sizes: StoryObj<IconButtonProps> = {
  render: (args: IconButtonProps) => (
    <HStack
      spacing={8}
      align="center"
    >
      {(['xs', 's', 'm', 'l'] as const).map((size) => (
        <IconButton
          key={size}
          {...args}
          size={size}
          content={PlusIcon}
          aria-label={`Add ${size}`}
        />
      ))}
    </HStack>
  ),

  args: {
    variant: 'ghost',
    semantic: 'secondary',
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
    content: {
      table: {
        disable: true,
      },
    },
  },
}

export const Loading: StoryObj<IconButtonProps> = {
  render: (args: IconButtonProps) => (
    <HStack
      spacing={8}
      align="center"
    >
      {(['xs', 's', 'm', 'l'] as const).map((size) => (
        <IconButton
          key={size}
          {...args}
          size={size}
          content={ChevronDownIcon}
          aria-label={`Loading ${size}`}
        />
      ))}
    </HStack>
  ),

  args: {
    variant: 'filled',
    semantic: 'primary',
    loading: true,
    active: false,
    disabled: false,
  },

  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    content: {
      table: {
        disable: true,
      },
    },
  },
}
