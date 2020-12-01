/* Internal dependencies */
import { styled } from '../../../styling/Theme'

export const NavigationWrapper = styled.div`
  height: 100%;
  position: relative;
`

export const StyledNavigation = styled.div`
  height: 100%;
`

export const ResizeBar = styled.div`
  width: 10px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(50%);
  background-color: transparent;
  cursor: col-resize;
  z-index: 9999999;
`
