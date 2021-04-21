/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '../../../utils/etcUtils'
import TagBadgeSize from '../constants/TagBadgeSize'
import TagBadgeVariant from '../constants/TagBadgeVariant'
import Tag from './Tag'
import TagProps from './Tag.types'

export default {
  title: getTitle(base),
  component: Tag,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: Object.keys(TagBadgeSize).map(k => TagBadgeSize[k]),
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(TagBadgeVariant).map(k => TagBadgeVariant[k]),
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
  variant: TagBadgeVariant.Important,
}
