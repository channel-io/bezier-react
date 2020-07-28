/* External dependencies */
import styled, { css } from 'styled-components'

/* Internal dependencies */
import RadioProps from './Radio.types'

export const StyledRadioWrapper = styled.div`
  display: flex;
`

/* eslint-disable @typescript-eslint/indent, consistent-return */
const StyledRadioInputDot = css<RadioProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  content: '';
  background-color:
    ${props => {
      if (props.checked && props.disabled) { return props.theme?.colors?.handle5 }
      if (props.checked) { return props.theme?.colors?.handle1 }
      return 'transparent'
    }};
  border-radius: 50%;
`

export const StyledRadioInput = styled.div<RadioProps>`
  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
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
  cursor:
    ${props => {
      if (props.disabled) { return 'auto' }
      return 'pointer'
    }};

  &::after {
    ${StyledRadioInputDot};
  }

  &:hover::after {
    background-color:
      ${props => {
        if (!props.disabled && !props.checked) { return props.theme?.colors?.handle2 }
      }};
  }
`

export const StyledRadioContent = styled.div`
  width: inherit;
`
/* eslint-enable @typescript-eslint/indent, consistent-return */
