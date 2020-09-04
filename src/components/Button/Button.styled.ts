/* Internal dependencies */
import { styled } from '../../foundation'
import { ButtonProps } from './Button.types'
import { ButtonThemeType } from './ButtonTheme'

interface StyledButtonProps {
  buttonTheme?: ButtonThemeType
}

export const StyledBaseButton = styled.div<ButtonProps & StyledButtonProps>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  background-color: white;
  border: none;
  border-radius: 6px;
  outline: none;
  box-shadow: 0 0 1px 10px black, 0 10px 10px black;
  padding: ${props => {
    if (!props.text) { return '0 7px' }
    return '0 9px'
  }};
  cursor: pointer;

  ${props => props.buttonTheme};
`
