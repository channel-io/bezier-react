/* External dependencies */
import { noop } from 'lodash-es'
import React, { useContext } from 'react'

/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { LayoutContext, SideState } from '../PlayGround/PlayGround'

const Div = styled.div`
  border: 1px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
`

interface SplitViewWrapperProps {
  sideState: SideState
}

const SplitViewWrapper = styled(Div)<SplitViewWrapperProps>`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  z-index: ${({ sideState }) => (sideState === SideState.SplitView ? 50 : 40)};
`

function SplitViewArea({ onCloseSplitView = noop }) {
  const layoutContext = useContext(LayoutContext)
  return (
    <SplitViewWrapper sideState={layoutContext!.sideState}>
      Split View
      <button type="button" onClick={onCloseSplitView}>스풀릿 뷰 닫기</button>
    </SplitViewWrapper>
  )
}

export default SplitViewArea
