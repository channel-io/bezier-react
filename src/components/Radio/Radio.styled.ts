/* eslint-disable @typescript-eslint/indent, consistent-return */
/* Internal dependencies */
import { styled, css } from '../../foundation'
import RadioProps, { StyledRadioHandleProps } from './Radio.types'

export const StyledRadioWrapper = styled.div<RadioProps>`
  display: flex;
  align-items: center;
  cursor:
    ${({ disabled }) => {
      if (disabled) { return 'auto' }
      return 'pointer'
    }};
`

const StyledRadioHandleDot = css<StyledRadioHandleProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  content: '';
  background-color:
    ${props => {
      if (!props.disabled && !props.checked && props.hovered) { return props.foundation?.theme?.['text-hover-blue'] }
      if (props.checked && props.disabled) { return props.foundation?.theme?.['text-hover-blue'] }
      if (props.checked) { return props.foundation?.theme?.['text-hover-blue'] }
      return 'transparent'
    }};
  border-radius: 50%;
  transition: ${({ foundation }) => foundation?.transition?.getTransitionsCSS('background-color')};
`

export const StyledRadioHandle = styled.div<RadioProps & StyledRadioHandleProps>`
  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  margin-right: 9px;
  border-radius: 50%;
  border:
    ${props => {
      if (props.checked) { return 'none' }
      return `2px solid ${props.foundation?.theme?.['text-hover-blue']}`
    }};
  background-color:
    ${props => {
      if (props.disabled) { return props.foundation?.theme?.['text-hover-blue'] }
      if (props.checked) { return props.foundation?.theme?.['text-hover-blue'] }
      return props.foundation?.theme?.['text-hover-blue']
    }};
  transition: ${props => props.foundation?.transition?.getTransitionsCSS('background-color')};

  &::after {
    ${StyledRadioHandleDot};
  }
`
/* eslint-enable @typescript-eslint/indent, consistent-return */
