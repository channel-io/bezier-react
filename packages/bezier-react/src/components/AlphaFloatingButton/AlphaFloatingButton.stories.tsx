import { ArrowRightIcon, PlusIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import {
  AlphaFloatingButton,
  type AlphaFloatingButtonProps,
} from '~/src/components/AlphaFloatingButton'

const meta: Meta<typeof AlphaFloatingButton> = {
  component: AlphaFloatingButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}
export default meta

export const Playground: StoryObj<AlphaFloatingButtonProps> = {
  args: {
    text: 'Invite',
    disabled: false,
    active: false,
    loading: false,
    prefixIcon: PlusIcon,
    suffixIcon: ArrowRightIcon,
    size: 'm',
    variant: 'primary',
    color: 'blue',
  },
}
