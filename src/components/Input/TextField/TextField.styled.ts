/* Internal dependencies */
import { css, styled, Typography } from '../../../foundation'
import DisabledOpacity from '../../../constants/DisabledOpacity'
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { Icon } from '../../Icon'
import { WithInterpolation } from '../../../types/InjectedInterpolation'
import {
  inputWrapperStyle,
  focusedInputWrapperStyle,
  erroredInputWrapperStyle,
} from '../constants/InputWrapperStyle'
import { TextFieldSize, TextFieldVariant } from './TextField.types'

interface ClickableElementProps {
  clickable: boolean
}

const clickableElementStyle = css`
  cursor: pointer;
`

const Input = styled.input<WithInterpolation>`
  width: 100%;
  height: 100%;
  ${Typography.Size14}
  padding: 0;

  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};

  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
  }

  ${({ interpolation }) => interpolation}
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

const RightItemWrapper = styled.div<ClickableElementProps & WithInterpolation>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  ${({ clickable }) => clickable && clickableElementStyle}

  ${({ interpolation }) => interpolation}
`

const ClearIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding-right: 2px;

  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};

  :hover {
    color: ${({ foundation }) => foundation?.theme?.['txt-black-darker']};
  }

  ${clickableElementStyle}
`

interface WrapperProps {
  variant?: TextFieldVariant
  bgColor: SemanticNames
  size?: TextFieldSize
  hasError?: boolean
  focused?: boolean
  disabled?: boolean
}

const Wrapper = styled.div<WrapperProps & WithInterpolation>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: ${({ size }) => size}px;
  padding: 0 12px;
  background-color: ${({ foundation, bgColor }) => foundation?.theme?.[bgColor]};

  ${({ foundation }) => foundation?.rounding.round8}
  opacity: ${({ disabled }) => disabled && DisabledOpacity};

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
  ClearIconWrapper,
  Wrapper,
}
