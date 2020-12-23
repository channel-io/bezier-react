/* Internal dependencies */
import { styled } from '../../foundation'
import GNBProps from './GNB.types'

const GNB = styled.div<GNBProps>`
  z-index: 10000;
  display: flex;
  flex: none;
  align-items: center;
  flex-direction: column;
  width: 68px;
  height: 100%;
  background-color: ${({ foundation }) => foundation?.theme?.['text-hover-blue']};
  box-shadow: inset -1px 0 0 0 ${({ foundation }) => foundation?.theme?.['text-hover-blue']};

  transition: background-color 200ms ease-in-out;
`

export default GNB
