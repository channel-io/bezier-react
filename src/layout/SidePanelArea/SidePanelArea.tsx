
/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { useLayoutState } from '../Client'
import { SidePanelAreaWrapper } from './SidePanelArea.styled'
import SidePanelAreaProps from './SidePanelArea.types'

function SidePanelArea({ children }: SidePanelAreaProps) {
  const { sideState } = useLayoutState()

  return (
    <SidePanelAreaWrapper sideState={sideState}>
      { children }
    </SidePanelAreaWrapper>
  )
}

export default SidePanelArea
