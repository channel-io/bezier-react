/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Div, Img } from './smoothCorners.styled'

export default {
  title: 'SmoothCorners',
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 1,
      },
    },
    height: {
      control: {
        type: 'range',
        min: 10,
        max: 100,
        step: 1,
      },
    },
  },
}

const Template = (args) => (
  <>
    <Div
      {...args}
    >
      hello
    </Div>
    <Div
      {...args}
    >
      hello
    </Div>
    <Img src="https://source.unsplash.com/random/100x100"/>
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  width: 100,
  height: 100,
}
