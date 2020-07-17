/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import NavigationProps from './Navigation.types'

export const StyledNavigation = styled.div<NavigationProps>`
  position: relative;
  flex: none;
  height: 100%;
  user-select: ${props => (props.isDragging ? 'none' : 'auto')};
  width: ${props => props.width}px;
  background-color: ${props => props.theme?.colors?.background1};
  box-shadow: inset -1px 0 0 0 ${props => props.theme?.colors?.background2};
  transition: background-color 200ms ease-in-out, width 200ms;
`

interface StyledHandleProps {
  disable: boolean
}

export const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`

interface StyledTitleWrapperProps {
  sticky: boolean
}

export const StyledTitleWrapper = styled.div<StyledTitleWrapperProps>`
  position: ${props => (props.sticky ? 'sticky' : 'initial')};
  top: 0;
  width: 100%;
  height: 75px;
  padding: 18px 18px 21px;
  box-sizing: border-box;
  background-color: ${props => props.theme?.colors?.background1};
`

export const StyledHandle = styled.div<StyledHandleProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: -8px;
  z-index: 10000;
  width: 16px;
  height: 100%;
  margin: 0 auto;
  cursor: ${props => (props.disable ? 'auto' : 'col-resize')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 7px;
    width: 2px;
    height: 100%;
    opacity: 0;
    background-color: ${props => props.theme?.colors?.background3};
    transition: opacity 0.2s;
  }

  &:hover::before {
    opacity: ${props => (props.disable ? 0 : 1)};
  }
`
