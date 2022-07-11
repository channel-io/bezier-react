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
import type SliderProps from './Slider.types'
import Slider from './Slider'

export default {
  title: getTitle(base),
  component: Slider,
  argTypes: {
    onClick: { action: 'onClick' },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

const Template: Story<SliderProps> = (args) => <Slider {...args} />

export const Primary: Story<SliderProps> = Template.bind({})
Primary.args = {
  disabled: false,
}
