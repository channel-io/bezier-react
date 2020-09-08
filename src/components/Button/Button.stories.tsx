/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import { ButtonIconPosition } from './Button.types'
import ButtonTheme from './ButtonTheme'
import Button from './Button'

enum ButtonThemeKeyword {
  Primary = 'Primary',
  Danger = 'Danger',
}

export default {
  title: getTitle(base),
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
    iconPosition: {
      control: {
        type: 'select',
        options: [
          ButtonIconPosition.Left,
          ButtonIconPosition.Right,
        ],
      },
    },
    buttonTheme: {
      control: {
        type: 'select',
        options: [
          ButtonThemeKeyword.Primary,
          ButtonThemeKeyword.Danger,
        ],
      },
    },
  },
}

function keywordToTheme(keyword: ButtonThemeKeyword) {
  switch (keyword) {
    case ButtonThemeKeyword.Danger:
      return ButtonTheme.Danger

    case ButtonThemeKeyword.Primary:
    default:
      return ButtonTheme.Primary
  }
}

const Template = ({ buttonTheme, ...args }) => {
  const buttonThemeFromArgs = keywordToTheme(buttonTheme)

  return (
    <Button
      buttonTheme={buttonThemeFromArgs}
      {...args}
    />
  )
}

export const Primary = Template.bind({})
Primary.args = {
  text: 'New Message',
  icon: 'send-filled',
  bold: true,
  iconPosition: ButtonIconPosition.Left,
  buttonTheme: ButtonThemeKeyword.Primary,
}
