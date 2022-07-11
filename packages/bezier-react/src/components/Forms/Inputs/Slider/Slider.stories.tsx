/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import {
  type Meta,
  type Story,
} from '@storybook/react'

/* Internal dependencies */
import {
  getTitle,
} from 'Utils/storyUtils'
import Slider from './Slider'
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
    disabled: {
      control: {
        type: 'boolean',
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
  },
} as Meta

const Template: Story<SliderProps> = (args) => <Slider {...args} />

export const Primary = Template.bind({})
Primary.args = {
  width: '36',
  defaultValue: [5],
  disabled: false,
  min: 0,
  max: 10,
  step: 1,
}

export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  width: '285',
  defaultValue: [5],
  disabled: false,
  min: 0,
  max: 10,
  step: 1,
}

export const Controlled = Template.bind({})
Controlled.args = {
  width: '285',
  defaultValue: [5],
  value: [5],
  disabled: false,
  min: 0,
  max: 10,
  step: 1,
}
