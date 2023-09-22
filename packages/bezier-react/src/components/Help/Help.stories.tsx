import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import Help from './Help'
import type HelpProps from './Help.types'

export default {
  component: Help,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const Primary: StoryObj<HelpProps> = {
  args: {
    children: 'Lorem ipsum',
  },
}
