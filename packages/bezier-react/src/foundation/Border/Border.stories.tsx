import React from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { styled } from '~/src/foundation'

const meta:Meta = {
  title: 'Foundation/Border',
  argTypes: {
    top: { control: 'boolean' },
    right: { control: 'boolean' },
    bottom: { control: 'boolean' },
    left: { control: 'boolean' },
    color: { control: 'color' },
    width: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
    },
  },
}
export default meta

interface BorderChipProps {
  width: number
  color: string
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
}

const BorderChip = styled.div<BorderChipProps>`
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  background-color: white;
  ${({ foundation, width, color, top, right, bottom, left }) =>
    foundation?.border?.getBorder(width, color, { top, right, bottom, left })};
`

const Template: StoryFn<BorderChipProps> = (args) => <BorderChip {...args} />

export const Primary = {
  render: Template,

  args: {
    width: 1,
    color: 'black',
    top: true,
    right: true,
    bottom: true,
    left: true,
  },
}
