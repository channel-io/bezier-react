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

export const Primary: StoryObj<AlphaButtonProps> = {
  args: {
    text: 'Invite',
    disabled: false,
    active: false,
    loading: false,
    prefixContent: PlusIcon,
    suffixContent: ArrowRightIcon,
    size: 'm',
    variant: 'primary',
    color: 'blue',
  },
  parameters: {
    design: {
      type: 'link',
      url: 'https://www.figma.com/design/8J76noM3T1Sp5cNPhnYQiG/Action?node-id=0-1&t=WwfuBAWI872yYPf8-1',
    },
  },
}
