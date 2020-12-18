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
`

interface SplitViewWrapperProps {
  sideState: SideState
}

export const SplitViewWrapper = styled(Div)<SplitViewWrapperProps>`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  z-index: ${({ sideState }) => (sideState === SideState.SplitView ? 50 : 40)};
`
