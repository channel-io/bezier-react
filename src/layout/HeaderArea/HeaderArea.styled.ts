/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { SideState } from '../Client/Client.types'

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

export const HeaderWrapper = styled(Div).attrs(({ sideState, sideWidth }: HeaderWrapperProps) => ({
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

export const LeftHeader = styled(Div)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

export const RightHeader = styled(Div)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`
