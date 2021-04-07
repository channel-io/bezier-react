/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import Avatar from './Avatar'
import { AvatarSize } from './Avatar.types'

export default {
  title: getTitle(base),
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: [
          AvatarSize.XXS,
          AvatarSize.XS,
          AvatarSize.S,
          AvatarSize.M,
          AvatarSize.L,
          AvatarSize.XL,
          AvatarSize.XXL,
          AvatarSize.XXXL,
        ],
      },
    },
  },
}

const Template = (args) => (
  <Avatar {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://bit.ly/dan-abramov',
  alt: 'Dan Abrahmov',
  size: AvatarSize.M,
}
