/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { SideState } from '../Client/Client.types'

interface SidePanelWrapperProps {
  sideState: SideState
}

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

export const SidePanelAreaWrapper = styled(Div)<SidePanelWrapperProps>`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  z-index: ${({ sideState }) => (sideState === SideState.SidePanel ? 50 : 40)};
`
