/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/storyUtils'
import { styled } from '../index'

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
}

interface BorderChipProps {
  width: number
  color: string
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
}

const BorderChip = styled.div<BorderChipProps>`
  width: 100px;
  height: 100px;
  background-color: white;
  ${({ foundation, width, color, top, right, bottom, left }) =>
    foundation?.border?.getBorder(width, color, { top, right, bottom, left })};
  box-sizing: border-box;
`

const Template = (args) => (
  <BorderChip {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 1,
  color: 'black',
  top: true,
  right: true,
  bottom: true,
  left: true,
}
