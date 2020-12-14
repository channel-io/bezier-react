
/* External dependencies */
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

interface SidePanelWrapperProps {
  sideState: SideState
}

const SidePanelWrapper = styled(Div)<SidePanelWrapperProps>`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  z-index: ${({ sideState }) => (sideState === SideState.SidePanel ? 50 : 40)};
`

function SidePanelArea() {
  const layoutContext = useContext(LayoutContext)

  return (
    <SidePanelWrapper sideState={layoutContext!.sideState}>
      SidePanel
    </SidePanelWrapper>
  )
}

export default SidePanelArea
