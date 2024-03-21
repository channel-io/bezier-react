import React from 'react'

import { TranslateIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn } from '@storybook/react'

import { Button } from '~/src/components/Button'

import { Tooltip } from './Tooltip'
import { type TooltipProps } from './Tooltip.types'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  argTypes: {
    offset: {
      control: {
        type: 'range',
      },
    },
  },
}
export default meta

const Template: StoryFn<TooltipProps> = ({ children, ...rest }) => (
  <Tooltip {...rest}>{children}</Tooltip>
)

export const Primary = {
  render: Template,

  args: {
    defaultShow: false,
    placement: 'bottom-center',
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
