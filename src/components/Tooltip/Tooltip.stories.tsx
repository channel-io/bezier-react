/* External dependencies */
import React, { useState, useCallback } from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import { styled } from '../../foundation'
import Tooltip from './Tooltip'
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
          TooltipPosition.Top,
          TooltipPosition.Left,
          TooltipPosition.Bottom,
          TooltipPosition.Right,
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
    marginX: {
      control: {
        type: 'range',
        min: -200,
        max: 200,
        step: 1,
      },
    },
    marginY: {
      control: {
        type: 'range',
        min: -200,
        max: 200,
        step: 1,
      },
    },
  },
}

const Target = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: ${props => props.foundation?.theme?.['bg-black-dark']};
  border-radius: 4px;
`

const Template = (props) => {
  const [showTarget, setShowTarget] = useState(true)

  const handleClick = useCallback(() => {
    setShowTarget(false)
  }, [])

  return (
    <Tooltip {...props}>
      { showTarget && (
        <Target onClick={handleClick}>
          Target
        </Target>
      ) }
    </Tooltip>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  // eslint-disable-next-line max-len
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  placement: TooltipPosition.Bottom,
  offset: 5,
  marginX: 0,
  marginY: 0,
  delayHide: false,
  disabled: false,
}
