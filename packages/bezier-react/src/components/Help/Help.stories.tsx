import type { Meta, StoryObj } from '@storybook/react'

import { Help } from './Help'

const meta: Meta<typeof Help> = {
  title: 'Deprecated v1 components/Help',
  tags: ['deprecated'],
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
    children: 'Lorem ipsum',
  },
}
