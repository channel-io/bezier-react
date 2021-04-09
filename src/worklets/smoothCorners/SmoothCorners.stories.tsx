/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { WithSmooth, WithoutSmooth } from './smoothCorners.styled'

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
  decorators: [
    Story => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        { Story() }
      </div>
    ),
  ],
}

const Template = (args) => (
  <>
    <WithSmooth
      {...args}
    />
    <WithoutSmooth
      {...args}
    />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  width: 100,
  height: 100,
}
