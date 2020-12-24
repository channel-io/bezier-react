/* External depdendencies */
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { Icon } from '../../../components/Icon'
import { styled } from '../../../styling/Theme'

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

interface NavigationContainerProps {
  showNavigation: boolean | undefined
}

export const NavigationContainer = styled.div<NavigationContainerProps>`
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  height: 100%;
  background-color: ${({ theme }) => theme?.colors?.background1};
  user-select: none;
  width: ${({ showNavigation }) => (showNavigation === false ? '0px' : 'inherit')};
  /* TODO: Foundation Transition 으로 교체 */
  transition: width 100ms ease-in-out;
  will-change: width;
  border: 1px solid red;
`

export const NavigationPositioner = styled.div`
  display: flex;
  flex-direction: column;
  overflow: visible;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
`

interface NavigationPresenterProps {
  showNavigation: boolean | undefined
  isHover: boolean
}

export const NavigationPresenter = styled.div<NavigationPresenterProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  pointer-events: auto;

  background-color: ${({ showNavigation }) => (showNavigation === false && 'white')};
  /* TODO: Foundation Transition 으로 교체 */
  transition:
    transform 200ms ease-in,
    opacity 100ms ease-out;

  opacity:
    ${({ showNavigation, isHover }) => (
    isNil(showNavigation) || (isHover) || (showNavigation) ? '1' : '0')};

  transform:
    ${({ showNavigation, isHover }) => {
    if (!(showNavigation === false)) { return 'translate(0, 0)' }
    if (isHover) { return ('translate(0, 40px)') }
    return 'translate(calc(20px - 100%), 40px)'
  }};

  will-change: transform, opacity;
`

interface StyledTitleWrapperProps {
  fixed: boolean
}

export const StyledTitleWrapper = styled.div<StyledTitleWrapperProps>`
  display: flex;
  align-items: center;
`

export const ChevronIcon = styled(Icon)`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  padding: 6px;
  border-radius: 8px;
  color: #979797;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background3};
  }
`

interface StyledContentWrapperProps {
  withScroll?: boolean
}

export const StyledContentWrapper = styled.div<StyledContentWrapperProps>`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: ${({ withScroll }) => (withScroll ? 'auto' : 'hidden')};

  & > *:last-child {
    margin-bottom: 40px !important;
  }
`

export const StyledFooterWrapper = styled.div`
  width: 100%;
`
