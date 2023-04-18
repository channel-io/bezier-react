import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import { base } from 'paths.macro'

import {
  getObjectFromEnum,
  getTitle,
} from '~/src/utils/storyUtils'

import { Tooltip } from './Tooltip'
import { TooltipPosition } from './Tooltip.types'

export default {
  title: getTitle(base),
  component: Tooltip,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: getObjectFromEnum(TooltipPosition),
      },
    },
  },
} as Meta

const Template: Story<any> = ({ children, ...rest }) => (
  <Tooltip {...rest}>
    { children }
  </Tooltip>
)

export const Primary = Template.bind({})

Primary.args = {
  offset: 4,
  children: (<div>button</div>),
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
}
