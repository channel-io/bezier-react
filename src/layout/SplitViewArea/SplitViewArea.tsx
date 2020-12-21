/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { useLayoutState } from '../Client'
import { SideState } from '../Client/Client.types'
import { SplitViewWrapper } from './SplitViewArea.styled'
import SplitViewAreaProps from './SplitViewArea.types'

function SplitViewArea({ children }: SplitViewAreaProps) {
  const { sideState } = useLayoutState()

  if (sideState === SideState.None) { return null }

  return (
    <SplitViewWrapper sideState={sideState}>
      { children }
    </SplitViewWrapper>
  )
}

export default SplitViewArea
