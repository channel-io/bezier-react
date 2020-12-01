/* External depdendencies */
import { isNil } from 'lodash-es'
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

export const NavigationContainer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
  position: relative;
  user-select: none;
  background-color: ${({ theme }) => theme?.colors?.background1};
  transition: width 100ms ease-out;
  will-change: width;
`

export const NavigationPositioner = styled.div`
  display: flex;
  flex-direction: column;
  width: 0;
  overflow: visible;
  z-index: 9;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
`
interface NavigationPresenterProps {
  width: number | undefined
  showSidebar: boolean
  isHover: boolean
}

export const NavigationPresenter = styled.div<NavigationPresenterProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${({ width }) => width}px;
  position: relative;
  pointer-events: auto;

  background-color: ${({ showSidebar }) => (showSidebar === false && 'white')};

  transition:
    transform 200ms ease-in,
    opacity 100ms ease-out;

  opacity: ${({ showSidebar, isHover }) => (isNil(showSidebar) && !(isHover) ? '0' : '1')};

  transform:
    ${({ showSidebar, isHover }) => {
    if (isHover) { return ('translate(0, 40px)') }
    return (showSidebar === false ? 'translate(calc(20px - 100%), 40px)' : 'translate(0, 0)')
  }};

  will-change: transform, opacity;
`

export const TitleWrapper = styled.div`
  display: flex;
`

export const TitleItemWrapper = styled.div`
  flex: 1 1 auto;
`
