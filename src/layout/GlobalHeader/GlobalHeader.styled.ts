/* Internal dependencies */
import { styled } from '../../styling/Theme'
import GlobalHeaderProps from './GlobalHeader.types'

export const StyledGlobalHeader = styled.div<GlobalHeaderProps>`
  position: relative;
  flex: none;
  width: 100%;
  height: ${props => (props.isWindows ? 32 : 40)}px;
  max-width: 100vw;
  background-color: ${props => props.theme?.colors?.background1};
  box-shadow: inset 0 -1px 0 0 ${props => props.theme?.colors?.background3};
  transition: background-color 200ms ease-in-out;
`
