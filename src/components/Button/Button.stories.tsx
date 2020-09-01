/* External dependencies */
import React from 'react'

/* Internal dependencies */
import Button from './Button'

export default {
  title: 'Button',
  comopnent: Button,
}

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  text: 'hello, world!',
}
