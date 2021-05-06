/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import { ButtonStyleVariant, ButtonColorVariant } from './Button.types'
import Button from './Button'

export default {
  title: getTitle(base),
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
    styleVariant: {
      control: {
        type: 'select',
        options: [
          ...Object.values(ButtonStyleVariant),
        ],
      },
    },
    colorVariant: {
      control: {
        type: 'select',
        options: [
          ...Object.values(ButtonColorVariant),
        ],
      },
    },
  },
}

const Template = ({ buttonTheme, ...args }) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  text: 'Invite',
  leftIcon: 'plus',
  rightIcon: 'arrow-right',
  bold: false,
  styleVariant: ButtonStyleVariant.Primary,
  colorVariant: ButtonColorVariant.Blue,
}
