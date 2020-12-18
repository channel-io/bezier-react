/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { SideState } from '../Client/Client.types'

interface HeaderWrapperProps {
  sideState: SideState
  sideWidth: number
}

export const HeaderWrapper = styled.div.attrs(({ sideState, sideWidth }: HeaderWrapperProps) => ({
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

export const LeftHeader = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

export const RightHeader = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`
