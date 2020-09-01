/* External dependencies */
import React from 'react'

/* Internal dependencies */
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 100,
        max: 500,
        step: 1,
      },
    },
    height: {
      control: {
        type: 'range',
        min: 40,
        max: 100,
        step: 1,
      },
    },
  },
}

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  text: 'hello, world!',
  width: 100,
  height: 100,
}
