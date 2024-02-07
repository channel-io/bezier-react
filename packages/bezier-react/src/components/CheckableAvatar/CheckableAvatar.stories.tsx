import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { CheckableAvatar } from './CheckableAvatar'
import type { CheckableAvatarProps } from './CheckableAvatar.types'

const meta: Meta<typeof CheckableAvatar> = {
  component: CheckableAvatar,
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
}
export default meta

const Template: StoryFn<CheckableAvatarProps> = ({ children, ...rest }) => (
  <CheckableAvatar {...rest}>{ children }</CheckableAvatar>
)

export const Primary: StoryObj<CheckableAvatarProps> = {
  render: Template,

  args: {
    avatarUrl:
      'https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png',
    name: 'Channel',
    size: '24',
    checked: undefined,
    defaultChecked: false,
    disabled: false,
    showBorder: false,
  },
}
