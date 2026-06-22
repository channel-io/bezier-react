import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from './Tag'
import type { TagProps, TagSize, TagVariant } from './Tag.types'

const SIZES: TagSize[] = ['xs', 's', 'm', 'l']

const VARIANTS: TagVariant[] = [
  'default',
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

const meta: Meta<typeof Tag> = {
  title: 'V3 components/Tag',
  component: Tag,
  args: {
    children: 'Tag',
    size: 'm',
    variant: 'default',
  },
  argTypes: {
    size: {
      control: 'select',
      options: SIZES,
    },
    variant: {
      control: 'select',
      options: VARIANTS,
    },
  },
}

export default meta

type Story = StoryObj<TagProps>

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
} as const

const labelStyle = {
  fontSize: 12,
  color: '#888',
} as const

export const Primary: Story = {}

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
          <Tag
            size={size}
            variant="default"
          >
            Tag
          </Tag>
          <Tag
            size={size}
            variant="default"
            onDelete={() => {}}
          >
            Tag
          </Tag>
        </div>
      ))}
    </div>
  ),
}

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
          <span style={{ ...labelStyle, width: 96 }}>{variant}</span>
          <Tag
            size="m"
            variant={variant}
          >
            Tag
          </Tag>
          <Tag
            size="m"
            variant={variant}
            onDelete={() => {}}
          >
            Tag
          </Tag>
        </div>
      ))}
    </div>
  ),
}

export const Deletable: Story = {
  args: {
    children: 'Tag',
    size: 'm',
    variant: 'default',
    onDelete: () => {},
  },
}
