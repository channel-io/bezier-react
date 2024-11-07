import React from 'react'

import { type Meta, type StoryFn } from '@storybook/react'

import { Slider } from './Slider'
import { type SliderProps } from './Slider.types'

const meta: Meta<typeof Slider> = {
  component: Slider,
  argTypes: {
    value: {
      control: {
        type: 'object',
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
}
export default meta

const Template: StoryFn<SliderProps> = (args) => {
  const processedArgs = getProcessedArgs(args)
  return <Slider {...processedArgs} />
}

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

const getProcessedArgs = (args: SliderProps): SliderProps => {
  return { ...args, value: getProcessedValue(args.value) }
}

const getProcessedValue = (
  value: undefined | Record<number, number> | number[]
) => {
  if (value === undefined) {
    return undefined
  }
  if (Array.isArray(value) && value.every((item) => typeof item === 'number')) {
    return value
  }
  if (typeof value === 'object' && value !== null) {
    return Object.values(value)
  }
  return value
}
