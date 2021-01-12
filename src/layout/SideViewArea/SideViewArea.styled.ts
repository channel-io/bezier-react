/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { SideState } from '../Client/Client.types'

interface SideViewWrapperProps {
  sideState: SideState
}

export const SideViewWrapper = styled.div<SideViewWrapperProps>`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  z-index: ${({ sideState }) => (sideState === SideState.SideView ? 50 : 40)};
`
