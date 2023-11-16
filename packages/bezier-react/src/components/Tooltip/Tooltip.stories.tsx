import React from 'react'

import { TranslateIcon } from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { getObjectFromEnum } from '~/src/utils/storyUtils'

import { Button } from '~/src/components/Button'

import { Tooltip } from './Tooltip'
import {
  TooltipPosition,
  type TooltipProps,
} from './Tooltip.types'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  argTypes: {
    offset: {
      control: {
        type: 'range',
      },
    },
    placement: {
      control: {
        type: 'select',
      },
      options: getObjectFromEnum(TooltipPosition),
    },
  },
}
export default meta

const Template: StoryFn<TooltipProps> = ({ children, ...rest }) => (
  <Tooltip {...rest}>{ children }</Tooltip>
)

export const Primary = {
  render: Template,

  args: {
    defaultShow: false,
    placement: TooltipPosition.BottomCenter,
    offset: 4,
    disabled: false,
    keepInContainer: true,
    allowHover: false,
    delayShow: undefined,
    delayHide: undefined,
    title: 'Lorem Ipsum is simply dummy text',
    children: <Button text="Button" />,
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: TranslateIcon,
  },
}
