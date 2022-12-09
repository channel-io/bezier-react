/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import { Avatar, AvatarSize } from 'Components/Avatars/Avatar'
import MOCK_AVATAR_LIST from './__mocks__/avatarList'
import { AvatarGroupEllipsisType, AvatarGroupProps } from './AvatarGroup.types'
import { AvatarGroup } from './AvatarGroup'

const avatarSizeList = Object.keys(AvatarSize)
  .filter(value => Number.isNaN(Number(value)) === true)
  .map(key => AvatarSize[key])

export default {
  title: getTitle(base),
  component: AvatarGroup,
  argTypes: {
    ellipsisType: {
      control: {
        type: 'radio',
        options: AvatarGroupEllipsisType,
      },
    },
    size: {
      control: {
        type: 'radio',
        options: avatarSizeList,
      },
    },
    max: {
      control: {
        type: 'range',
        min: 1,
        max: MOCK_AVATAR_LIST.length,
        step: 1,
      },
    },
    spacing: {
      control: {
        type: 'range',
        min: -50,
        max: 50,
        step: 1,
      },
    },
    onMouseEnterEllipsis: {
      action: 'mouseEnter',
    },
    onMouseLeaveEllipsis: {
      action: 'mouseLeave',
    },
  },
} as Meta

const Template: Story<AvatarGroupProps> = (args) => (
  <AvatarGroup {...args}>
    { MOCK_AVATAR_LIST.map(({ id, avatarUrl, name }) => (
      <Avatar
        key={id}
        avatarUrl={avatarUrl}
        name={name}
      />
    )) }
  </AvatarGroup>
)

export const Primary: Story<AvatarGroupProps> = Template.bind({})
Primary.args = {
  max: 5,
  size: AvatarSize.Size30,
  ellipsisType: AvatarGroupEllipsisType.Icon,
  spacing: 4,
}
