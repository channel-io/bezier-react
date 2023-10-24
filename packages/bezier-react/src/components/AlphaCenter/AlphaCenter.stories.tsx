import React from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { Text } from '~/src/components/Text'

import { AlphaCenter } from './AlphaCenter'
import { type AlphaCenterProps } from './AlphaCenter.types'

const meta: Meta<typeof AlphaCenter> = {
  component: AlphaCenter,
}
export default meta

const Template: StoryFn<AlphaCenterProps> = ({ children, ...rest }) => (
  <AlphaCenter {...rest}>
    <Text color="txt-black-darkest">
      { children }
    </Text>
  </AlphaCenter>
)

export const Primary = {
  render: Template,

  args: {
    style: {
      width: '200px',
      height: '200px',
    },
    children: 'Centered content',
  },
}
