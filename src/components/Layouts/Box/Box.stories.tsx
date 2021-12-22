/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { getTitle } from 'Utils/storyUtils'
import { BoxProps } from './Box.types'
import Box from './Box'

export default {
  title: getTitle(base),
  component: Box,
} as Meta

const Template: Story<BoxProps> = ({ children, ...rest }) => (
  <Box {...rest}>
    { children }
  </Box>
)

export const Primary = Template.bind({})
Primary.args = {
  display: 'flex',
  as: 'label',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'bg-black-light',
  typo: Typography.Size13,
  width: 's10',
  h: 's10',
  m: 's2',
  p: 's6',
  bold: true,
  italic: true,
  children: 'Box!',
}
