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
  transition: background-color 200ms ease-in-out;
`

interface StyledHandleProps {
  disable: boolean
}

export const StyledHandle = styled.div<StyledHandleProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: -8px;
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
