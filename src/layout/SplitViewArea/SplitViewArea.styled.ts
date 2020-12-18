/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { SideState } from '../Client/Client.types'

interface SplitViewWrapperProps {
  sideState: SideState
}

export const SplitViewWrapper = styled.div<SplitViewWrapperProps>`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  z-index: ${({ sideState }) => (sideState === SideState.SplitView ? 50 : 40)};
`
