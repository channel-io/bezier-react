/* Internal dependencies */
import { styled } from '../../styling/Theme'
import GNBProps from './GNB.types'

const GNB = styled.div<GNBProps>`
  z-index: 10001;
  display: flex;
  flex: none;
  align-items: center;
  flex-direction: column;
  width: 68px;
  height: 100%;
  background-color: ${props => props.theme?.colors?.background2};
  box-shadow: inset -1px 0 0 0 ${props => props.theme?.colors?.background3};

  transition: background-color 200ms ease-in-out;
`

export default GNB
