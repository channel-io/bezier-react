import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

import { getTitle } from '~/src/utils/storyUtils'

import Spinner from './Spinner'
import type SpinnerProps from './Spinner.types'
import { SpinnerSize } from './Spinner.types'

export default {
  title: getTitle(base),
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
  color: 'bg-black-dark',
}
