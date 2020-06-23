/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import GNBProps from './GNB.types'

const GNB = styled.div<GNBProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 68px;
  height: 100%;
  background-color: ${props => props.theme?.colors?.background2};
`

export default GNB
