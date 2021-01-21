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
  padding: 0 ${({ text }) => (!text ? 7 : 9)}px;
  cursor: pointer;
  background-color: white;
  border: none;
  border-radius: 6px;
  outline: none;

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'color'])};

  ${props => props.buttonTheme};
`
