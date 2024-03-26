import React from 'react'

import { AppleIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Badge } from './Badge'
import { type BadgeProps } from './Badge.types'

const meta: Meta<typeof Badge> = {
  component: Badge,
}

export default meta

const Template: StoryFn<BadgeProps> = ({ children, ...badgeProps }) => (
  <Badge {...badgeProps}>{children}</Badge>
)

export const Primary: StoryObj<BadgeProps> = {
  render: Template,

  args: {
    children: 'Design',
    size: 'm',
    icon: AppleIcon,
    variant: 'default',
  },
}
