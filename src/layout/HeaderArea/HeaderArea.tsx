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
  justify-self: stretch;
  align-self: stretch;
`

interface HeaderWrapperProps {
  sideState: SideState
  sideWidth: number
}

const HeaderWrapper = styled(Div).attrs(({ sideState, sideWidth }: HeaderWrapperProps) => ({
  style: {
    gridTemplateColumns: `1fr ${sideState === SideState.SplitView ? sideWidth : 250}px`,
  },
}))<HeaderWrapperProps>`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-rows: 1fr;
  z-index: ${({ sideState }) => (sideState === SideState.SidePanel ? 50 : 40)};
`

const LeftHeader = styled(Div)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

const RightHeader = styled(Div)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`

function HeaderArea() {
  const layoutContext = useContext(LayoutContext)

  return (
    <HeaderWrapper sideState={layoutContext!.sideState} sideWidth={layoutContext!.sideWidth}>
      <LeftHeader>Header - Left</LeftHeader>
      { /* Split View의 Header는 Split View Area에 있다고 가정하고 작성하였으나, RightHeader을 갈아끼는 방식으로도 가능함. */ }
      <RightHeader>Header - Right</RightHeader>
    </HeaderWrapper>
  )
}

export default HeaderArea
