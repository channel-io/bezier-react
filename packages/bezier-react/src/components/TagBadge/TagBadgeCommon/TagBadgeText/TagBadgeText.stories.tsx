/* External dependencies */
import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '~/src/utils/storyUtils'

import TagBadgeText from './TagBadgeText'
import type TagBadgeTextProps from './TagBadgeText.types'

export default {
  title: getTitle(base),
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
} as Meta

const Template: Story<TagBadgeTextProps> = ({ children, ...otherProps }) => (
  <TagBadgeText {...otherProps}>
    { children }
  </TagBadgeText>
)

export const Primary: Story<TagBadgeTextProps> = Template.bind({})
Primary.args = {
  children: 'hello',
  horizontalPadding: 4,
}
