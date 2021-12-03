/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from '../index'
import { getTitle } from '../../utils/storyUtils'

export default {
  title: getTitle(base),
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
} as Meta

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

const Template: Story<BorderChipProps> = (args) => <BorderChip {...args} />

export const Primary = Template.bind({})
Primary.args = {
  width: 1,
  color: 'black',
  top: true,
  right: true,
  bottom: true,
  left: true,
}
