import React from 'react'

import { FaceSmileIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { OutlineItem } from './OutlineItem'
import { type OutlineItemProps } from './OutlineItem.types'

const meta: Meta<typeof OutlineItem> = {
  component: OutlineItem,
}

const Template: StoryFn<OutlineItemProps> = (args) => (
  <div style={{ width: 200 }}>
    <OutlineItem {...args}>
      <OutlineItem {...args}>
        <OutlineItem {...args} />
      </OutlineItem>
    </OutlineItem>
  </div>
)

export const Primary: StoryObj<OutlineItemProps> = {
  render: Template,
  args: {
    open: false,
    disableChevron: false,
    content: 'Icon',
    leftContent: FaceSmileIcon,
  },
}

export default meta
