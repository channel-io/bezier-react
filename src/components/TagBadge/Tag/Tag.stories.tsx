/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '../../../utils/etcUtils'
import {
  TagBadgeSize,
  TagBadgeVariant,
} from '../TagBadgeCommon'
import Tag from './Tag'
import TagProps from './Tag.types'

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

const Template: Story<TagProps> = ({
  text,
  ...otherProps
}) => (
  <Tag
    {...otherProps}
  >
    { text }
  </Tag>
)

export const Primary: Story<TagProps> = Template.bind({})
Primary.args = {
  text: 'Design',
  size: TagBadgeSize.M,
  variant: TagBadgeVariant.Default,
  // eslint-disable-next-line no-console
  onDelete: console.log,
}
