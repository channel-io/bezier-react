/* Internal dependencies */
import { styled, Typography } from '../../../foundation'
import { WithInterpolation } from '../../../types/InjectedInterpolation'
import {
  erroredInputWrapperStyle,
  focusedInputWrapperStyle,
  inputWrapperStyle,
} from '../constants/InputWrapperStyle'

interface WrapperProps extends WithInterpolation {
  focused: boolean
  hasError?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  ${({ foundation }) => foundation?.rounding.round8}

  ${inputWrapperStyle};

  ${({ focused }) => focused && focusedInputWrapperStyle}

  ${({ hasError }) => hasError && erroredInputWrapperStyle}

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['border-color', 'box-shadow'])};

  ${({ interpolation }) => interpolation}
`

interface InputProps extends WithInterpolation{
  maxHeight: number
}

const Input = styled.div<InputProps>`
  box-sizing: border-box;
  width: 100%;
  min-height: 18px;
  max-height: ${({ maxHeight }) => maxHeight}px;
  margin: 6px;
  overflow: auto;

  ${Typography.Size14}

  &[contenteditable] {
    border: none;
    outline: none;
  }
`

export default {
  Wrapper,
  Input,
}
