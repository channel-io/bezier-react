/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { useLayoutState } from '../Client'
import { SplitViewWrapper } from './SplitViewArea.styled'
import SplitViewAreaProps from './SplitViewArea.types'

function SplitViewArea({ children }: SplitViewAreaProps) {
  const { sideState } = useLayoutState()
  return (
    <SplitViewWrapper sideState={sideState}>
      { /* <button type="button" onClick={onCloseSplitView}>스풀릿 뷰 닫기</button> */ }
      { children }
    </SplitViewWrapper>
  )
}

export default SplitViewArea
