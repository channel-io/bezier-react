/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { SideState } from '../Client/Client.types'

interface SidePanelWrapperProps {
  sideState: SideState
}

export const SidePanelAreaWrapper = styled.div<SidePanelWrapperProps>`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  z-index: ${({ sideState }) => (sideState === SideState.SidePanel ? 50 : 40)};
`
