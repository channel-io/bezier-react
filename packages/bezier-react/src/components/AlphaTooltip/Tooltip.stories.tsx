import React from 'react'

import { base } from 'paths.macro'
import {
  type Meta,
  type Story,
} from '@storybook/react'

import { getTitle } from '~/src/utils/storyUtils'

import { Tooltip } from './Tooltip'

export default {
  title: getTitle(base),
  component: Tooltip,
} as Meta

const Template: Story<any> = ({ children, ...rest }) => (
  <Tooltip {...rest}>
    { children }
  </Tooltip>
)

export const Primary = Template.bind({})

Primary.args = {}
