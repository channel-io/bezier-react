import React from 'react'

import { type Meta, type StoryFn } from '@storybook/react'

import { Slider } from './Slider'
import { type SliderProps } from './Slider.types'

const meta: Meta<typeof Slider> = {
  component: Slider,
  argTypes: {
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
  args:{
    width: 285,
    disabled: false,
    guide: [5],
    min: 0,
    max: 10,
    step: 1,
    disableTooltip: false,
  }
}
export default meta

const Template: StoryFn<SliderProps> = (otherSwitchProps) => {
  return <Slider {...otherSwitchProps} />
}

export const Primary = Template.bind({})
Primary.args = {
  value: [5],
}

export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  defaultValue: [5],
}
