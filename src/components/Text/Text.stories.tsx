/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import Text from './Text'

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
          null,
          'h1',
          'h2',
          'button',
        ],
      },
    },

    style: { control: 'object' },
  },
}

const Template = ({
  text,
  ...otherTextProps
}) => (
  <Text {...otherTextProps}>
    { text }
  </Text>
)

export const Primary = Template.bind({})
Primary.args = {
  as: null,
  bold: false,
  italic: false,
  style: { color: 'gray' },
  text: 'hello',
}
