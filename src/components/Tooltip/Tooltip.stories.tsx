/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import { styled } from '../../foundation'
import Tooltip from './Tooltip'
import { TooltipPosition } from './Tooltip.types'

export default {
  title: getTitle(base),
  component: Tooltip,
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

const Template = () => (
  <Tooltip content="content" placement={TooltipPosition.Bottom} offset={10} delayHide>
    <Target>
      Target
    </Target>
  </Tooltip>
)

export const Primary = Template.bind({})
Primary.args = {

}
