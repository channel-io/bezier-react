import React from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { AlphaSmoothCornersBox } from './AlphaSmoothCornersBox'
import { type AlphaSmoothCornersBoxProps } from './AlphaSmoothCornersBox.types'

export default {
  component: AlphaSmoothCornersBox,
} as Meta

const Template: StoryFn<AlphaSmoothCornersBoxProps> = ({
  children,
  ...otherCheckboxProps
}) => (
  <AlphaSmoothCornersBox
    style={{ width: 200, height: 200 }}
    {...otherCheckboxProps}
  >
    { children }
  </AlphaSmoothCornersBox>
)

export const Primary = {
  render: Template,

  args: {
    disabled: false,
    borderRadius: '42%',
    shadow: {
      offsetX: 0,
      offsetY: 0,
      blurRadius: 10,
      spreadRadius: 10,
      color: 'bg-black-dark',
    },
    margin: 0,
    backgroundColor: 'bgtxt-absolute-white-normal',
    backgroundImage: '',
  },
}
