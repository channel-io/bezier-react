import React from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import { LegacyTooltip } from './LegacyTooltip'
import { type LegacyTooltipProps } from './LegacyTooltip.types'
import { LegacyTooltipPosition } from './LegacyTooltip.types'

const meta: Meta<typeof LegacyTooltip> = {
  component: LegacyTooltip,
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    placement: {
      control: {
        type: 'radio',
      },
      options: [
        LegacyTooltipPosition.TopCenter,
        LegacyTooltipPosition.TopLeft,
        LegacyTooltipPosition.TopRight,
        LegacyTooltipPosition.RightCenter,
        LegacyTooltipPosition.RightTop,
        LegacyTooltipPosition.RightBottom,
        LegacyTooltipPosition.BottomCenter,
        LegacyTooltipPosition.BottomLeft,
        LegacyTooltipPosition.BottomRight,
        LegacyTooltipPosition.LeftCenter,
        LegacyTooltipPosition.LeftTop,
        LegacyTooltipPosition.LeftBottom,
      ],
    },
    offset: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1,
      },
    },
    delayShow: {
      control: {
        type: 'range',
        min: 0,
        max: 5000,
        step: 100,
      },
    },
    delayHide: {
      control: {
        type: 'range',
        min: 0,
        max: 5000,
        step: 100,
      },
    },
  },
}
export default meta

const Target = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: ${props => props.foundation?.theme?.['bg-black-dark']};
  border-radius: 4px;
`

const Template: StoryFn<LegacyTooltipProps> = (props) => (
  <LegacyTooltip {...props}>
    <Target>Target</Target>
  </LegacyTooltip>
)

export const Primary = {
  render: Template,

  args: {
    // eslint-disable-next-line max-len
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    lazy: true,
    placement: LegacyTooltipPosition.BottomCenter,
    offset: 4,
    disabled: false,
    keepInContainer: false,
    allowHover: false,
    delayShow: 0,
    delayHide: 0,
  },
}
