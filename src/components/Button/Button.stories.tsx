/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import { ButtonIconPosition } from './Button.types'
import Button from './Button'

export default {
  title: getTitle(base),
  component: Button,
  argTypes: {
    iconPosition: {
      control: {
        type: 'select',
        options: [
          ButtonIconPosition.Left,
          ButtonIconPosition.Right,
        ],
      },
    },
  },
}

const Template = (args) => (
  <>
    <Button {...args}/>
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  text: 'New Message',
  icon: 'send-filled',
  bold: true,
  iconPosition: ButtonIconPosition.Left,
}
