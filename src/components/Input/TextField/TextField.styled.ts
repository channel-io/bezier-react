/* Internal dependencies */
import { css, styled, Typography, disabledWrapper } from '../../../foundation'
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { Icon } from '../../Icon'
import img from '../../Icon/assets/cancel-circle-filled.svg'
import { WithInterpolation } from '../../../types/InjectedInterpolation'
import {
  inputWrapperStyle,
  focusedInputWrapperStyle,
  erroredInputWrapperStyle,
} from '../constants/InputWrapperStyle'
import { TextFieldSize, TextFieldType, TextFieldVariant } from './TextField.types'

interface ClickableElementProps {
  clickable: boolean
}

const clickableElementStyle = css`
  cursor: pointer;
`

export const placeholderStyle = (themeKey: SemanticNames = 'txt-black-dark') => css`
  &::placeholder {
    color: ${({ foundation }) => foundation?.theme?.[themeKey]};
  }
`

const searchInputStyle = css`
  &[type="${TextFieldType.Search}"] {
    appearance: textfield;
  }

  &[type="${TextFieldType.Search}"]::-webkit-search-decoration {
    appearance: none;
  }

  &[type="${TextFieldType.Search}"]::-webkit-search-cancel-button {
    appearance: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background: url(${img}) no-repeat 50% 50%;

    filter: opacity(0.4);

    :hover {
      filter: opacity(0.6);
    }

    background-size: contain;
  }
`

interface InputProps {
  disabled: boolean
  readOnly: boolean
  color: SemanticNames
}

const Input = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  ${Typography.Size14}
  padding: 0;

  color: ${({ foundation, color }) => foundation?.theme?.[color]};

  background-color: transparent;
  border: none;
  outline: none;

  ${({ type }) => type === TextFieldType.Search && searchInputStyle}

  ${placeholderStyle()}
`

const LeftIcon = styled(Icon)<ClickableElementProps>`
  ${({ clickable }) => clickable && clickableElementStyle}
`

const LeftContentWrapper = styled.div<WithInterpolation>`
  display: flex;
  align-items: center;
  padding-right: 6px;

  ${({ interpolation }) => interpolation}
`

const RightContentWrapper = styled.div<WithInterpolation>`
  display: flex;
  align-items: center;
  padding-right: 2px;

  ${({ interpolation }) => interpolation}
`

const RightItemWrapper = styled('div')<ClickableElementProps & WithInterpolation>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  ${({ clickable }) => clickable && clickableElementStyle}

  ${({ interpolation }) => interpolation}
`

interface WrapperProps {
  variant?: TextFieldVariant
  bgColor: SemanticNames
  size?: TextFieldSize
  hasError?: boolean
  readOnly?: boolean
  focused?: boolean
  disabled?: boolean
}

const Wrapper = styled.div<WrapperProps & WithInterpolation>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: ${({ size }) => size}px;
  padding: 0 10px;
  background-color: ${({ foundation, bgColor }) => foundation?.theme?.[bgColor]};

  ${({ foundation }) => foundation?.rounding.round8}
  ${({ disabled }) => disabled && disabledWrapper};

  ${({ variant }) => variant === TextFieldVariant.Primary && inputWrapperStyle};
  ${({ focused }) => focused && focusedInputWrapperStyle}
  ${({ hasError }) => hasError && erroredInputWrapperStyle}

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['border-color', 'box-shadow'])};

  ${({ interpolation }) => interpolation}
`

export default {
  Input,
  LeftIcon,
  LeftContentWrapper,
  RightItemWrapper,
  RightContentWrapper,
  Wrapper,
}
