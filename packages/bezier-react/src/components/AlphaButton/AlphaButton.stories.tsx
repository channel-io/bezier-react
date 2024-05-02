import { ArrowRightIcon, PlusIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import {
  AlphaButton,
  type AlphaButtonProps,
} from '~/src/components/AlphaButton'

const meta: Meta<typeof AlphaButton> = {
  component: AlphaButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}
export default meta

export const Playground: StoryObj<AlphaButtonProps> = {
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
