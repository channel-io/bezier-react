import { ArrowLeftIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import {
  AlphaToggleButton,
  type AlphaToggleButtonProps,
} from '~/src/components/AlphaToggleButton'

const meta: Meta<typeof AlphaToggleButton> = {
  component: AlphaToggleButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
}
export default meta

export const Playground: StoryObj<AlphaToggleButtonProps> = {
  args: {
    text: 'Invite',
    selected: false,
    loading: false,
    prefixContent: ArrowLeftIcon,
    size: 'm',
    shape: 'capsule',
    variant: 'primary',
  },
}
