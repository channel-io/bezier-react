/* eslint-disable @typescript-eslint/indent, consistent-return */
/* Internal dependencies */
import { styled, css } from '../../styling/Theme'
import RadioProps, { StyledRadioHandleProps } from './Radio.types'

export const StyledRadioWrapper = styled.div<RadioProps>`
  display: flex;
  align-items: center;
  cursor:
    ${props => {
      if (props.disabled) { return 'auto' }
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
      if (!props.disabled && !props.checked && props.hovered) { return props.theme?.colors?.handle2 }
      if (props.checked && props.disabled) { return props.theme?.colors?.handle5 }
      if (props.checked) { return props.theme?.colors?.handle1 }
      return 'transparent'
    }};
  border-radius: 50%;
  transition: ${props => props.theme?.transition?.getTransitionCSS('background-color')};
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
      return `2px solid ${props.theme?.colors?.border3}`
    }};
  background-color:
    ${props => {
      if (props.disabled) { return props.theme?.colors?.background3 }
      if (props.checked) { return props.theme?.colors?.success1 }
      return props.theme?.colors?.background0
    }};
  transition: ${props => props.theme?.transition?.getTransitionCSS('background-color')};

  &::after {
    ${StyledRadioHandleDot};
  }
`
/* eslint-enable @typescript-eslint/indent, consistent-return */
