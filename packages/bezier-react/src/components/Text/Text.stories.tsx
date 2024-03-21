import React from 'react'

import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Box } from '~/src/components/Box'

import { Text } from './Text'
import { type TextProps } from './Text.types'

const meta: Meta<typeof Text> = {
  component: Text,
}

const Template: StoryFn<TextProps> = ({ children, ...rest }) => (
  <Box width={200}>
    <Text {...rest}>{children}</Text>
  </Box>
)

export const Primary: StoryObj<typeof Text> = {
  render: Template,
  args: {
    bold: false,
    italic: false,
    truncated: false,
    color: 'txt-black-darkest',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    typo: '15',
  },
}

const MultiLineTruncated: StoryFn<TextProps> = ({ children, ...rest }) => (
  <Box width={200}>
    <Text
      {...rest}
      color="txt-black-darkest"
    >
      {children}
    </Text>
  </Box>
)

export const Secondary: StoryObj<typeof Text> = {
  render: MultiLineTruncated,
  args: {
    truncated: 4,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor nunc, bibendum vel neque eget, facilisis ornare justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In laoreet ipsum in commodo eleifend. Duis vestibulum, nulla ut tincidunt molestie, eros massa commodo risus, non sollicitudin turpis diam vitae elit.',
  },
  name: 'Multi-line truncated',
}

export default meta
