import React from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import Text from './Text'
import type TextProps from './Text.types'

const meta: Meta<typeof Text> = {
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
      },
      options: [
        undefined,
        'h1',
        'h2',
        'button',
      ],
    },

    style: { control: 'object' },
  },
}
export default meta

const Template: StoryFn<TextProps> = ({ children, ...otherTextProps }) => (
  <Text {...otherTextProps}>{ children }</Text>
)

export const Primary = {
  render: Template,

  args: {
    as: undefined,
    bold: false,
    italic: false,
    truncated: false,
    style: { color: 'gray' },
    children: 'hello',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    marginAll: 0,
  },
}

const Truncated: StoryFn<TextProps & { width: string }> = ({
  children,
  width,
  ...otherTextProps
}) => (
  <div style={{ width }}>
    <Text {...otherTextProps}>{ children }</Text>
  </div>
)

export const Secondary = {
  render: Truncated,

  args: {
    width: '100px',
    truncated: true,
    style: { color: 'gray' },
    children: 'test truncated long text',
  },

  name: 'Usage (truncated)',
}
