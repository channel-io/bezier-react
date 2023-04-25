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

import { Button } from '~/src/components/Button'

import {
  Tooltip,
  TooltipProvider,
} from './Tooltip'
import {
  TooltipPosition,
  type TooltipProps,
} from './Tooltip.types'

export default {
  title: getTitle(base),
  component: Tooltip,
  subcomponents: { TooltipProvider },
  argTypes: {
    offset: {
      control: {
        type: 'range',
      },
    },
    placement: {
      control: {
        type: 'select',
        options: getObjectFromEnum(TooltipPosition),
      },
    },
  },
} as Meta<TooltipProps>

const Template: Story<TooltipProps> = ({ children, ...rest }) => (
  <Tooltip {...rest}>
    { children }
  </Tooltip>
)

export const Primary = Template.bind({})

Primary.args = {
  defaultShow: false,
  placement: TooltipPosition.BottomCenter,
  offset: 4,
  disabled: false,
  keepInContainer: true,
  allowHover: false,
  delayShow: 0,
  delayHide: 0,
  children: (<Button text="Button" />),
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}
