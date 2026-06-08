import * as BezierIcons from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import { Box } from '~/src/v3/Box'

import { Badge } from './Badge'
import {
  type BadgeProps,
  type BadgeSize,
  type BadgeVariant,
} from './Badge.types'

const iconOptions = Object.fromEntries(
  Object.entries(BezierIcons).filter(([key]) => key.endsWith('Icon'))
)

const SIZES: BadgeSize[] = ['xs', 's', 'm', 'l']

const VARIANTS: BadgeVariant[] = [
  'default',
  'neutral-light',
  'neutral-dark',
  'blue',
  'cobalt',
  'teal',
  'green',
  'olive',
  'pink',
  'navy',
  'yellow',
  'orange',
  'red',
  'purple',
]

const meta: Meta<typeof Badge> = {
  title: 'V3 components/Badge',
  component: Badge,
  args: {
    children: 'Label',
    size: 'm',
    variant: 'default',
    icon: 'PlusIcon' as unknown as BadgeProps['icon'],
    truncated: false,
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['none', ...Object.keys(iconOptions)],
      mapping: { none: undefined, ...iconOptions },
    },
    variant: {
      control: 'select',
      options: VARIANTS,
    },
    size: {
      control: 'select',
      options: SIZES,
    },
    truncated: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof Badge>

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
} as const

const labelStyle = {
  fontSize: 12,
  color: '#888',
} as const

/**
 * Adjust `size` / `variant` / `icon` with the controls panel.
 */
export const Primary: Story = {}

/**
 * Each size (based on the `default` variant).
 */
export const Sizes: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {SIZES.map((size) => (
        <div
          key={size}
          style={rowStyle}
        >
          <span style={{ ...labelStyle, width: 24 }}>{size}</span>
          <Badge
            size={size}
            variant="default"
            icon={BezierIcons.PlusIcon}
          >
            Label
          </Badge>
        </div>
      ))}
    </div>
  ),
}

/**
 * Each variant (based on the `m` size).
 */
export const Variants: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {VARIANTS.map((variant) => (
        <div
          key={variant}
          style={rowStyle}
        >
          <span style={{ ...labelStyle, width: 132 }}>{variant}</span>
          <Badge
            size="m"
            variant={variant}
            icon={BezierIcons.PlusIcon}
          >
            Label
          </Badge>
        </div>
      ))}
    </div>
  ),
}

/**
 * Truncated (in a narrow container).
 */
export const Truncated: Story = {
  tags: ['!autodocs'],
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    truncated: true,
  },
  render: (args) => (
    <Box width={200}>
      <Badge {...args} />
    </Box>
  ),
}
