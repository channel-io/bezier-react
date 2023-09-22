import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import FormLabel from './FormLabel'
import type FormLabelProps from './FormLabel.types'

export default {
  component: FormLabel,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    help: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const Primary: StoryObj<FormLabelProps> = {
  args: {
    htmlFor: 'test',
    help: 'Lorem ipsum',
    children: 'Label',
  },
}
