import { AppleIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Box } from '~/src/components/Box'

import { Badge } from './Badge'
import { type BadgeProps } from './Badge.types'

const meta: Meta<typeof Badge> = {
  component: Badge,
}

export default meta

const Template: StoryFn<BadgeProps> = ({ children, ...badgeProps }) => (
  <Badge {...badgeProps}>{children}</Badge>
)

const Truncated: StoryFn<BadgeProps> = ({ children, ...badgeProps }) => (
  <Box width={200}>
    <Badge {...badgeProps}>{children}</Badge>
  </Box>
)

export const Primary: StoryObj<BadgeProps> = {
  render: Template,

  args: {
    children: 'Design',
    size: 'm',
    icon: AppleIcon,
    variant: 'default',
  },
  argTypes: {
    truncated: {
      table: {
        disable: true,
      },
    },
  },
}

export const Secondary: StoryObj<BadgeProps> = {
  render: Truncated,

  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    size: 'm',
    icon: AppleIcon,
    variant: 'default',
    truncated: true,
  },
  name: 'Truncated',
}
