import { ArrowRightIcon, GiftIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import { AlphaToggleButton } from '~/src/components/AlphaToggleButton'

const meta = {
  component: AlphaToggleButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} satisfies Meta<typeof AlphaToggleButton>

export default meta

export const Primary = {
  args: {
    text: 'Invite',
    selected: false,
    loading: false,
    prefixContent: GiftIcon,
    suffixContent: ArrowRightIcon,
    size: 'm',
    shape: 'capsule',
    value: 'invite',
    variant: 'primary',
  },
  parameters: {
    design: {
      type: 'link',
      url: 'https://www.figma.com/design/fPXP9zfjZU9NyARnhTWL6o/Input?node-id=426-1255&t=tGbZuTTPrTF5lobw-0',
    },
  },
} satisfies StoryObj<typeof meta>
