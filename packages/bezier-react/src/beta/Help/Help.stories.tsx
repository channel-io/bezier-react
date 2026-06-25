import type { Meta, StoryObj } from '@storybook/react'

import { Help } from './Help'

const meta: Meta<typeof Help> = {
  title: 'Beta components/Help',
  component: Help,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

export const Primary: StoryObj<typeof Help> = {
  args: {
    children: 'This is help text.',
  },
}
