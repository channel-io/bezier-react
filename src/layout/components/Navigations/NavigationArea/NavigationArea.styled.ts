/* External depdendencies */
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { styled } from 'Foundation'

interface ResizeBarProps {
  disable: boolean
}

export const ResizeBar = styled.div<ResizeBarProps>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 101;
  display: flex;
  justify-content: center;
  width: 10px;
  height: 100%;
  cursor: ${props => (props.disable ? 'auto' : 'col-resize')};
  background-color: transparent;
  transform: translateX(50%);

  &::after {
    position: relative;
    display: block;
    width: 1px;
    height: 100%;
    margin-right: 1px;
    content: '';
    background-color: ${({ foundation }) => foundation?.theme?.['bdr-black-light']};
    opacity: 0.7;
  }

  &:hover {
    &::after {
      background-color: ${({ foundation }) => foundation?.theme?.['bdr-black-light']};
      opacity: 1;
    }
  }
`

interface NavigationContainerProps {
  showNavigation: boolean | undefined
}

export const NavigationContainer = styled.div<NavigationContainerProps>`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  width: ${({ showNavigation }) => (showNavigation === false ? '0px' : 'inherit')};
  height: 100%;
  user-select: none;
  ${({ foundation }) =>
    foundation?.transition?.getTransitionsCSS(
      'width',
      foundation?.transition?.TransitionDuration.M,
    )};
  will-change: width;
`

export const NavigationPositioner = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: visible;
`

interface NavigationPresenterProps {
  showNavigation: boolean | undefined
  isHover: boolean
}

export const NavigationPresenter = styled.div<NavigationPresenterProps>`
  z-index: ${({ showNavigation }) => !showNavigation && 102} !important;
  display: flex;
  flex-direction: column;
  height: 100%;
  pointer-events: auto;
  /* TODO: Hovering Color Prop 추가 */
  background-color: ${({ foundation }) => foundation?.theme?.['bg-navi']};
  border-radius: ${({ showNavigation }) => (!showNavigation ? '8px' : 0)};
  opacity:
    ${({ showNavigation, isHover }) => (
    isNil(showNavigation) || (isHover) || (showNavigation) ? '1' : '0')};

  ${({ foundation }) =>
    foundation?.transition?.getTransitionsCSS(
      ['transform', 'opacity', 'box-shadow', 'border-radius'],
      foundation?.transition?.TransitionDuration?.M,
    )};

  transform:
    ${({ showNavigation, isHover }) => {
    if (!(showNavigation === false)) { return 'translate(0, 0)' }
    if (isHover) { return ('translate(6px, 6px)') }
    return 'translate(calc(20px - 100%), 6px)'
  }};

  ${({ foundation, showNavigation }) => !showNavigation && foundation?.elevation?.ev3()};

  will-change: transform, opacity;
`
