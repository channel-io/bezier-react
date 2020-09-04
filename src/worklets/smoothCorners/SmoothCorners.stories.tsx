/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Div, Div2, Div3 } from './smoothCorners.styled'

export default {
  title: 'SmoothCorners',
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 10,
        max: 500,
        step: 1,
      },
    },
    height: {
      control: {
        type: 'range',
        min: 10,
        max: 500,
        step: 1,
      },
    },
  },
}

const Template = (args) => (
  <>
    <Div
      {...args}
    />
    <Div2
      {...args}
    >
      hello
    </Div2>
    <Div3 {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  width: 100,
  height: 100,
}
