/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { Avatar } from 'Components/Avatars/Avatar'
import ButtonProps, { ButtonSize, ButtonStyleVariant, ButtonColorVariant } from './Button.types'
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
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary: Story<ButtonProps> = Template.bind({})
Primary.args = {
  text: 'Invite',
  disabled: false,
  active: false,
  loading: false,
  leftComponent: 'plus',
  rightComponent: 'arrow-right',
  size: ButtonSize.M,
  styleVariant: ButtonStyleVariant.Primary,
  colorVariant: ButtonColorVariant.Blue,
}

export const WithCustomComponent: Story<ButtonProps> = Template.bind({})
WithCustomComponent.args = {
  text: 'Set Manager',
  leftComponent: <Avatar name="test" avatarUrl="https://source.unsplash.com/random" />,
  size: ButtonSize.M,
  styleVariant: ButtonStyleVariant.Primary,
  colorVariant: ButtonColorVariant.Blue,
}
