/* External dependencies */
import TextareaAutosize from 'react-textarea-autosize'

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

  padding: 8px 12px;

  ${({ focused }) => focused && focusedInputWrapperStyle}

  ${({ hasError }) => hasError && erroredInputWrapperStyle}

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['border-color', 'box-shadow'])};

  ${({ interpolation }) => interpolation}
`

const TextAreaAutoSizeBase = styled(TextareaAutosize)<WithInterpolation>`
  box-sizing: border-box;
  width: 100%;
  resize: none;
  background: none;
  border: none;
  outline: none;

  ${Typography.Size14}

  ${({ interpolation }) => interpolation}
`

export default {
  Wrapper,
  TextAreaAutoSizeBase,
}
