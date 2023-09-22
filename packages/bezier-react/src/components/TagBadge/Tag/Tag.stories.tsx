import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import {
  TagBadgeSize,
  TagBadgeVariant,
} from '~/src/components/TagBadge'

import { Tag } from './Tag'
import type TagProps from './Tag.types'

export default {
  component: Tag,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: TagBadgeSize,
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: TagBadgeVariant,
      },
    },
  },
} as Meta

const Template: StoryFn<TagProps> = ({ children, ...otherProps }) => (
  <Tag {...otherProps}>{ children }</Tag>
)

export const Primary: StoryObj<TagProps> = {
  render: Template,

  args: {
    children: 'Design',
    size: TagBadgeSize.M,
    variant: TagBadgeVariant.Default,
    // eslint-disable-next-line no-console
    onDelete: console.log,
  },
}
