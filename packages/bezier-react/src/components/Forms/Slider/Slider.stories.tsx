/* External dependencies */
import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '~/src/utils/storyUtils'

import { Slider } from './Slider'
import type SliderProps from './Slider.types'

export default {
  title: getTitle(base),
  component: Slider,
  argTypes: {
    width: {
      control: {
        type: 'text',
      },
    },
    min: {
      control: {
        type: 'number',
      },
    },
    max: {
      control: {
        type: 'number',
      },
    },
    step: {
      control: {
        type: 'number',
      },
    },
    onValueChange: {
      action: 'onValueChange',
    },
    onThumbPointerDown: {
      action: 'onThumbPointerDown',
    },
    onThumbPointerUp: {
      action: 'onThumbPointerUp',
    },
  },
} as Meta

const Template: Story<SliderProps> = (args) => <Slider {...args} />

export const Primary = Template.bind({})
Primary.args = {
  width: '285',
  defaultValue: [5],
  value: [2],
  min: 0,
  max: 10,
  step: 1,
}

export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  width: '285',
  defaultValue: [5],
  value: [2],
  min: 0,
  max: 10,
  step: 1,
}

export const Disabled = Template.bind({})
Disabled.args = {
  width: '285',
  defaultValue: [5],
  value: [2],
  min: 0,
  max: 10,
  step: 1,
  disabled: true,
}

export const WithGuide = Template.bind({})
WithGuide.args = {
  width: '285',
  defaultValue: [5],
  value: [2],
  guide: [0, 1, 2, 3, 4, 5, 10],
  min: 0,
  max: 10,
  step: 1,
}

export const MultipleThumbs = Template.bind({})
MultipleThumbs.args = {
  width: '285',
  defaultValue: [3, 7],
  value: [2, 4],
  min: 0,
  max: 10,
  step: 1,
  minStepsBetweenThumbs: 1,
}
