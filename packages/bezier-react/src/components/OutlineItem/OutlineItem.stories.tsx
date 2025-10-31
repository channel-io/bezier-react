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

export const WithOnClick: StoryObj<OutlineItemProps> = {
  render: Template,
  args: {
    open: false,
    disableChevron: false,
    content: 'Clickable Item',
    leftContent: FaceSmileIcon,
    onClick: () => alert('clicked'),
  },
}

export const WithRightContent: StoryObj<OutlineItemProps> = {
  render: Template,
  args: {
    open: false,
    disableChevron: false,
    content: 'With Right Content',
    leftContent: FaceSmileIcon,
    rightContent: <span style={{ color: 'gray', fontSize: 12 }}>⌘K</span>,
  },
}

export const WithOnClickAndRightContent: StoryObj<OutlineItemProps> = {
  render: Template,
  args: {
    open: false,
    disableChevron: false,
    content: 'Clickable with Right Content',
    leftContent: FaceSmileIcon,
    rightContent: <span style={{ color: 'gray', fontSize: 12 }}>⌘K</span>,
    onClick: () => alert('clicked'),
  },
}

export const Active: StoryObj<OutlineItemProps> = {
  render: Template,
  args: {
    open: false,
    disableChevron: false,
    content: 'Active Item',
    leftContent: FaceSmileIcon,
    active: true,
    onClick: () => alert('clicked'),
  },
}

export default meta
