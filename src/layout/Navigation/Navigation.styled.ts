/* Internal dependencies */
import { styled } from '../../styling/Theme'
import NavigationProps from './Navigation.types'

export const StyledNavigation = styled.div<NavigationProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: none;
  height: 100%;
  user-select: ${props => (props.isDragging ? 'none' : 'auto')};
  width: ${props => props.width}px;
  background-color: ${props => props.theme?.colors?.background1};
  box-shadow: inset -1px 0 0 0 ${props => props.theme?.colors?.background2};
  transition: background-color 200ms ease-in-out, width 200ms;
  overflow: hidden;
`

interface StyledContentWrapperProps {
  withScroll?: boolean
}

export const StyledContentWrapper = styled.div<StyledContentWrapperProps>`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: ${props => (props.withScroll ? 'auto' : 'hidden')};

  & > *:last-child {
    margin-bottom: 40px !important;
  }
`

interface StyledTitleWrapperProps {
  fixed?: boolean
}

export const StyledTitleWrapper = styled.div<StyledTitleWrapperProps>`
  width: 100%;
  height: 75px;
  padding: 18px 18px 21px;
  box-sizing: border-box;
  background-color: ${props => props.theme?.colors?.background1};
`

interface StyledHandleProps {
  disable: boolean
}

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
