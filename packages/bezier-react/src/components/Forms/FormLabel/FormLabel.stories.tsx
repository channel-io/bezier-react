import React from 'react'

import type {
  Meta,
  Story,
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

const Template: Story<FormLabelProps> = props => <FormLabel {...props} />

export const Primary: Story<FormLabelProps> = Template.bind({})
Primary.args = {
  htmlFor: 'test',
  help: 'Lorem ipsum',
  children: 'Label',
}
