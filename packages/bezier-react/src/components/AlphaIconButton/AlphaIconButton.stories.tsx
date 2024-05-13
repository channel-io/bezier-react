import { PlusIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import {
  AlphaIconButton,
  type AlphaIconButtonProps,
} from '~/src/components/AlphaIconButton'

const meta: Meta<typeof AlphaIconButton> = {
  component: AlphaIconButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}
export default meta

export const Playground: StoryObj<AlphaIconButtonProps> = {
  args: {
    disabled: false,
    active: false,
    loading: false,
    icon: PlusIcon,
    shape: 'rectangle',
    'aria-label': 'invite',
    size: 'm',
    variant: 'primary',
    color: 'blue',
  },
}
