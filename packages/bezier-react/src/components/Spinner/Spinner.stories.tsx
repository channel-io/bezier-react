import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'

import Spinner from './Spinner'
import type SpinnerProps from './Spinner.types'
import { SpinnerSize } from './Spinner.types'

export default {
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: [
          SpinnerSize.XL,
          SpinnerSize.L,
          SpinnerSize.M,
          SpinnerSize.S,
          SpinnerSize.XS,
        ],
      },
    },
  },
} as Meta

const Template: Story<SpinnerProps> = ({ ...args }) => <Spinner {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: SpinnerSize.M,
}
