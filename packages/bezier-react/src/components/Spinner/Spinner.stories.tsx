import React from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import Spinner from './Spinner'
import type SpinnerProps from './Spinner.types'
import { SpinnerSize } from './Spinner.types'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: [
        SpinnerSize.XL,
        SpinnerSize.L,
        SpinnerSize.M,
        SpinnerSize.S,
        SpinnerSize.XS,
      ],
    },
  },
}
export default meta

const Template: StoryFn<SpinnerProps> = ({ ...args }) => <Spinner {...args} />

export const Primary = {
  render: Template,

  args: {
    size: SpinnerSize.M,
  },
}
