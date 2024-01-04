import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { Text } from './Text'
import { type TextProps } from './Text.types'

const meta: Meta<typeof Text> = {
  component: Text,
}

const Template: StoryFn<TextProps> = ({ children, ...rest }) => (
  <Text {...rest}>
    { children }
  </Text>
)

export const Primary: StoryObj<typeof Text> = {
  render: Template,
  args: {
    bold: false,
    italic: false,
    color: 'txt-black-darkest',
    children: 'Hello, Channel!',
    typo: '15',
  },
}

const Truncated: StoryFn<TextProps> = ({
  children,
  ...rest
}) => (
  <div style={{
    width: '100px',
  }}
  >
    <Text {...rest}>{ children }</Text>
  </div>
)

export const Secondary: StoryObj<typeof Text> = {
  render: Truncated,
  args: {
    color: 'txt-black-darkest',
    truncated: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  name: 'Usage (truncated)',
}

export default meta
