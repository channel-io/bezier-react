import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import { base } from 'paths.macro'

import { getTitle } from '~/src/utils/storyUtils'

import {
  TagBadgeSize,
  TagBadgeVariant,
} from '~/src/components/TagBadge'

import { Tag } from './Tag'
import type TagProps from './Tag.types'

export default {
  title: getTitle(base),
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

const Template: Story<TagProps> = ({ children, ...otherProps }) => (
  <Tag {...otherProps}>
    { children }
  </Tag>
)

export const Primary: Story<TagProps> = Template.bind({})
Primary.args = {
  children: 'Design',
  size: TagBadgeSize.M,
  variant: TagBadgeVariant.Default,
  // eslint-disable-next-line no-console
  onDelete: console.log,
}
