/* External dependencies */
import React, { useState } from 'react'
import { base } from 'paths.macro'
import {
  type Story,
  type Meta,
} from '@storybook/react'

/* Internal dependencies */
import { styled } from '~/src/foundation'
import { getTitle } from '~/src/utils/storyUtils'
import Tooltip from './Tooltip'
import type TooltipProps from './Tooltip.types'
import { TooltipPosition } from './Tooltip.types'

export default {
  title: getTitle(base),
  component: Tooltip,
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    placement: {
      control: {
        type: 'radio',
        options: [
          TooltipPosition.TopCenter,
          TooltipPosition.TopLeft,
          TooltipPosition.TopRight,
          TooltipPosition.RightCenter,
          TooltipPosition.RightTop,
          TooltipPosition.RightBottom,
          TooltipPosition.BottomCenter,
          TooltipPosition.BottomLeft,
          TooltipPosition.BottomRight,
          TooltipPosition.LeftCenter,
          TooltipPosition.LeftTop,
          TooltipPosition.LeftBottom,
        ],
      },
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
} as Meta

const Target = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: ${props => props.foundation?.theme?.['bg-black-dark']};
  border-radius: 4px;
`

const Template: Story<TooltipProps> = (props) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  return (
    <div ref={setContainer}>
      <Tooltip
        {...props}
        container={container}
      >
        <Target>
          Target
        </Target>
      </Tooltip>
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  // eslint-disable-next-line max-len
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  lazy: true,
  placement: TooltipPosition.BottomCenter,
  offset: 4,
  disabled: false,
  keepInContainer: false,
  allowHover: false,
  delayShow: 0,
  delayHide: 0,
}
