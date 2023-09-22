import React from 'react'

import { AppleIcon } from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import {
  TagBadgeSize,
  TagBadgeVariant,
} from '~/src/components/TagBadge'

import { Badge } from './Badge'
import type BadgeProps from './Badge.types'

const meta:Meta<typeof Badge> = {
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
}
export default meta

const Template: StoryFn<BadgeProps> = ({ children, ...badgeProps }) => (
  <Badge {...badgeProps}>{ children }</Badge>
)

export const Primary: StoryObj<BadgeProps> = {
  render: Template,

  args: {
    children: 'Design',
    size: TagBadgeSize.M,
    icon: AppleIcon,
    variant: TagBadgeVariant.Default,
  },
}
