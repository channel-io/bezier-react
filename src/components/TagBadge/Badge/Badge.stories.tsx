/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '../../../utils/storyUtils'
import {
  TagBadgeSize,
  TagBadgeVariant,
} from '../TagBadgeCommon'
import Badge from './Badge'
import BadgeProps from './Badge.types'

export default {
  title: getTitle(base),
  component: Badge,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: Object.keys(TagBadgeSize).map(k => TagBadgeSize[k]),
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(TagBadgeVariant).map(k => TagBadgeVariant[k]),
      },
    },
  },
} as Meta

const Template: Story<BadgeProps> = ({
  text,
  ...otherProps
}) => (
  <Badge
    {...otherProps}
  >
    { text }
  </Badge>
)

export const Primary: Story<BadgeProps> = Template.bind({})
Primary.args = {
  text: 'Design',
  size: TagBadgeSize.M,
  iconName: 'apple',
  variant: TagBadgeVariant.Important,
}
