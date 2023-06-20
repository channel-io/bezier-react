import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

import { getTitle } from '~/src/utils/storyUtils'

import { Slider } from './Slider'
import type SliderProps from './Slider.types'

export default {
  title: getTitle(base),
  component: Slider,
  argTypes: {
    value: {
      control: {
        type: 'array',
      },
    },
    minStepsBetweenThumbs: {
      control: {
        type: 'number',
      },
    },
    onValueChange: {
      action: 'onValueChange',
    },
    onValueCommit: {
      action: 'onValueCommit',
    },
  },
} as Meta

const Template: Story<SliderProps> = (args) => <Slider {...args} />

export const Primary = Template.bind({})
Primary.args = {
  width: 285,
  defaultValue: [5],
  value: undefined,
  disabled: false,
  guide: [5],
  min: 0,
  max: 10,
  step: 1,
  disableTooltip: false,
}
