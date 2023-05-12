import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import { base } from 'paths.macro'

import {
  getObjectFromEnum,
  getTitle,
} from '~/src/utils/storyUtils'

import { AvatarSize } from '~/src/components/Avatars/Avatar'

import { CheckableAvatar } from './CheckableAvatar'
import type { CheckableAvatarProps } from './CheckableAvatar.types'

export default {
  title: getTitle(base),
  component: CheckableAvatar,
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
        options: getObjectFromEnum(AvatarSize),
      },
    },
  },
} as Meta<CheckableAvatarProps>

const Template: Story<CheckableAvatarProps> = ({ children, ...rest }) => (
  <CheckableAvatar {...rest}>
    { children }
  </CheckableAvatar>
)

export const Primary: Story<CheckableAvatarProps> = Template.bind({})
Primary.args = {
  avatarUrl: 'https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png',
  name: 'Channel',
  size: AvatarSize.Size24,
  checked: undefined,
  defaultChecked: false,
  disabled: false,
  showBorder: false,
}
