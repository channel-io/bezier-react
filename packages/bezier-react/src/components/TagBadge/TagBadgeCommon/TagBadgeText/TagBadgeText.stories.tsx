import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import TagBadgeText from './TagBadgeText'
import type TagBadgeTextProps from './TagBadgeText.types'

const meta: Meta<typeof TagBadgeText> = {
  component: TagBadgeText,
  argTypes: {
    horizontalPadding: {
      control: {
        type: 'radio',
        options: [2, 4],
      },
    },
    /**
     * FIXME:
     * storybook controls 에서 styled-components 의 css ReturnType 를
     * select options 의 entity 로 지원하지 않는 듯 함.
     * 임시로 typo 를 controls 에서 제거하였음.
     */
    typo: { table: { disable: true } },
  },
}
export default meta

const Template: StoryFn<TagBadgeTextProps> = ({ children, ...otherProps }) => (
  <TagBadgeText {...otherProps}>{ children }</TagBadgeText>
)

export const Primary: StoryObj<TagBadgeTextProps> = {
  render: Template,

  args: {
    children: 'hello',
    horizontalPadding: 4,
  },
}
