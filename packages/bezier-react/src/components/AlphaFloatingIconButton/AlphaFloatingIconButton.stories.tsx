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

export const Primary: StoryObj<AlphaFloatingIconButtonProps> = {
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
  parameters: {
    design: {
      type: 'link',
      url: 'https://www.figma.com/design/8J76noM3T1Sp5cNPhnYQiG/Action?node-id=112-2766&t=7KmMal05dj8QL5kK-1',
    },
  },
}
