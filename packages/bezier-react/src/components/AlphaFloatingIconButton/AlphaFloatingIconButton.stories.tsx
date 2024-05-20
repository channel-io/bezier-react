import { PlusIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import {
  AlphaFloatingIconButton,
  type AlphaFloatingIconButtonProps,
} from '~/src/components/AlphaFloatingIconButton'

const meta: Meta<typeof AlphaFloatingIconButton> = {
  component: AlphaFloatingIconButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}
export default meta

export const Playground: StoryObj<AlphaFloatingIconButtonProps> = {
  args: {
    disabled: false,
    active: false,
    loading: false,
    content: PlusIcon,
    'aria-label': 'invite',
    size: 'm',
    variant: 'primary',
    color: 'blue',
  },
}
