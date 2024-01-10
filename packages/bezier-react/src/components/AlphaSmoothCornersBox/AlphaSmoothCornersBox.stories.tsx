import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { AlphaSmoothCornersBox } from './AlphaSmoothCornersBox'
import { type AlphaSmoothCornersBoxProps } from './AlphaSmoothCornersBox.types'

const meta: Meta = {
  component: AlphaSmoothCornersBox,
}

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

export const Primary: StoryObj<AlphaSmoothCornersBoxProps> = {
  render: Template,
  args: {
    disabled: false,
    borderRadius: '42%',
    shadow: {
      offsetX: 0,
      offsetY: 4,
      blurRadius: 20,
      spreadRadius: 0,
      color: 'shdw-large',
    },
    margin: 0,
    backgroundColor: 'bgtxt-absolute-white-dark',
    backgroundImage: '',
  },
}

export default meta
