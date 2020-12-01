/* Internal dependencies */
import { styled } from '../../styling/Theme'
// import { SidebarState } from './Sidebar.types'

interface StyledSidebarContainerProps {
  width: string
  showSidebar: boolean
}

export const StyledSidebarContainer = styled.div<StyledSidebarContainerProps>`
  width: ${({ width, showSidebar }) => (showSidebar ? width : 0)}px;
  height: 100%;
  user-select: none;
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme?.colors?.background1};
  z-index: 9000;

  transition: width 100ms ease-out;
  will-change: width;
`
interface StyledSidebarPositionerProps {}

export const StyledSidebarPositioner = styled.div<StyledSidebarPositionerProps>`
  display: flex;
  flex-direction: column;
  width: 0;
  overflow: visible;
  z-index: 9;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
`

interface StyledSidebarPresenterProps {
  width: string
  showSidebar: boolean
  isHover: boolean
}

export const StyledSidebarPresenter = styled.div<StyledSidebarPresenterProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  pointer-events: auto;
  max-height: 100%;
  width: ${({ width }) => width}px;

  background-color: ${({ showSidebar }) => (showSidebar ? 'transparent' : 'white')};

  transition:
    transform 200ms ease-in,
    opacity 100ms ease-out;

  opacity: ${({ showSidebar, isHover }) => (showSidebar || isHover ? '1' : '0')};

  transform:
    ${({ showSidebar, isHover }) => {
    if (isHover) {
      return ('translate(0, 40px)')
    }
    return (showSidebar ? 'translate(0, 0)' : 'translate(calc(20px - 100%), 40px)')
  }};

  will-change: transform, opacity;
`

export const StyledTitleWrapper = styled.div`
  display: flex;
`

export const TitleItemWrapper = styled.div`
  flex: 1 1 auto;
`
