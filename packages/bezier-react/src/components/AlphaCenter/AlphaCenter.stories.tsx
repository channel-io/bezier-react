import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

import { getTitle } from '~/src/utils/storyUtils'

import { Text } from '~/src/components/Text'

import { AlphaCenter } from './AlphaCenter'
import { type AlphaCenterProps } from './AlphaCenter.types'

export default {
  title: getTitle(base),
  component: AlphaCenter,
} as Meta<AlphaCenterProps>

const Template: Story<AlphaCenterProps> = ({ children, ...rest }) => (
  <AlphaCenter {...rest}>
    <Text color="txt-black-darkest">
      { children }
    </Text>
  </AlphaCenter>
)

export const Primary = Template.bind({})

Primary.args = {
  style: {
    width: '200px',
    height: '200px',
  },
  children: 'Centered content',
}
