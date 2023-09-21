import React from 'react'

import type {
  Meta,
  Story,
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

const Template: Story<HelpProps> = props => <Help {...props} />

export const Primary: Story<HelpProps> = Template.bind({})
Primary.args = {
  children: 'Lorem ipsum',
}
