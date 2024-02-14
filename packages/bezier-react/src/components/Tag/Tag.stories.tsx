import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import {
  TagBadgeSize,
  TagBadgeVariant,
} from '~/src/components/TagBadgeCommon'

import { Tag } from './Tag'

const meta: Meta<typeof Tag> = {
  component: Tag,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: TagBadgeSize,
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: TagBadgeVariant,
    },
  },
}
export default meta

const Template: StoryFn<typeof Tag> = ({ children, ...otherProps }) => (
  <Tag {...otherProps}>{ children }</Tag>
)

export const Primary: StoryObj<typeof Tag> = {
  render: Template,

  args: {
    children: 'Design',
    size: TagBadgeSize.M,
    variant: TagBadgeVariant.Default,
    // eslint-disable-next-line no-console
    onDelete: console.log,
    // eslint-disable-next-line no-console
    onClick: console.log,
  },
}
