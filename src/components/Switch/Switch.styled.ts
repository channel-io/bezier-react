/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import { WrapperProps, ContentProps } from './Switch.types'

const PADDING = 4

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${props => props.size * 2}px;
  height: ${props => props.size + PADDING}px;
  background-color: ${props => (props.checked ? props.theme.palette.green400 : props.theme.palette.grey300)};
  border-radius: ${props => (props.size + PADDING) / 2}px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color ease-in-out 0.15s;
  opacity: ${props => (props.disabled ? '.2' : 'initial')};

  &:hover {
    background-color: ${props => (props.checked ? props.theme.palette.green500 : props.theme.palette.grey500)};
  }
`

export const Content = styled.div<ContentProps>`
  position: absolute;
  top: ${PADDING / 2}px;
  left: ${PADDING / 2}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.theme.palette.white};
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 ${props => props.theme.palette.black15};
  transition: transform 100ms ease-out;
  transform: ${props => (props.checked ? `translateX(${props.size - PADDING}px)` : 'initial')};
`
