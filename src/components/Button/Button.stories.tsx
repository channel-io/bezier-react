/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import {
  ButtonSize,
  ButtonStyleVariant,
  ButtonColorVariant,
} from './Button.types'
import Button from './Button'

export default {
  title: getTitle(base),
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
    size: {
      control: {
        type: 'radio',
        options: [
          ...Object.values(ButtonSize),
        ],
      },
    },
    styleVariant: {
      control: {
        type: 'radio',
        options: [
          ...Object.values(ButtonStyleVariant),
        ],
      },
    },
    colorVariant: {
      control: {
        type: 'radio',
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
  size: ButtonSize.M,
  styleVariant: ButtonStyleVariant.Primary,
  colorVariant: ButtonColorVariant.Blue,
}
