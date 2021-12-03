/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '../../utils/storyUtils'
import Text from './Text'
import TextProps from './Text.types'

export default {
  title: getTitle(base),
  component: Text,
  argTypes: {
    /**
     * FIXME:
     * storybook controls 에서 styled-components 의 css ReturnType 를
     * select options 의 entity 로 지원하지 않는 듯 함.
     * 임시로 typo 를 controls 에서 제거하였음.
     */
    typo: { table: { disable: true } },
    as: {
      control: {
        type: 'select',
        options: [
          undefined,
          'h1',
          'h2',
          'button',
        ],
      },
    },

    style: { control: 'object' },
  },
} as Meta

const Template: Story<TextProps> = ({ children, ...otherTextProps }) => (
  <Text {...otherTextProps}>
    { children }
  </Text>
)

export const Primary = Template.bind({})
Primary.args = {
  as: undefined,
  bold: false,
  italic: false,
  style: { color: 'gray' },
  children: 'hello',
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginVertical: 0,
  marginHorizontal: 0,
  marginAll: 0,
}
