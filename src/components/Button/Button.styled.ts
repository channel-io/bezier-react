/* External dependencies */
import styled, { css } from 'styled-components'

/* Internal dependencies */
import { ButtonProps, ButtonTheme } from './Button.types'

export const SolidStyle = css`
  color: ${props => props.theme?.colors?.absoluteWhite};
  background-color: ${props => props.theme?.colors?.solidBackground};
  font-weight: bold;

  &:hover {
    background-color: ${props => props.theme?.colors?.solidHover};
  }
`

function getButtonStyle(theme: string) {
  switch (theme) {
    default:
    case ButtonTheme.Normal:
      return SolidStyle
  }
}

export const StyledBaseButton = styled.button<ButtonProps>`
  ${props => getButtonStyle(props.theme)}

  height: 34px;
  min-width: 70px;
  padding: 8px 22px;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: background-color 100ms ease-in-out, box-shadow 100ms ease-in-out;

  &:hover {
    box-shadow: 0 1px 4px 0 ${props => props.theme?.colors?.shadow1};
    cursor: pointer;
  }
`
