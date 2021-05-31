/* External dependencies */
import TextareaAutosize from 'react-textarea-autosize'

/* Internal dependencies */
import { SemanticNames, styled, Typography } from '../../../foundation'
import { WithInterpolation } from '../../../types/InjectedInterpolation'
import {
  erroredInputWrapperStyle,
  focusedInputWrapperStyle,
  inputWrapperStyle,
} from '../constants/InputWrapperStyle'

interface WrapperProps extends WithInterpolation {
  focused: boolean
  hasError?: boolean
  bgColor: SemanticNames
}

const Wrapper = styled.div<WrapperProps>`
  ${inputWrapperStyle};

  box-sizing: border-box;
  padding: 8px 12px;
  background-color: ${({ foundation, bgColor }) => foundation?.theme?.[bgColor]};

  ${({ focused }) => focused && focusedInputWrapperStyle}

  ${({ hasError }) => hasError && erroredInputWrapperStyle}

  ${({ foundation }) => foundation?.rounding.round8}

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['border-color', 'box-shadow'])};

  ${({ interpolation }) => interpolation}
`

interface TextAreaAutoSizeBaseProps extends WithInterpolation{
  readOnly: boolean
}

/**
 * FIXME: https://github.com/rollup/plugins/issues/872
 * @rollup/plugin-commonjs 의 버그로 인해 default export 가 namespace 그 자체로 계산됨.
 * commonjs 상황을 위해 '.default' 를 추가함.
 */
// @ts-ignore
const TextAreaAutoSizeBase = styled(TextareaAutosize.default ?? TextareaAutosize)<TextAreaAutoSizeBaseProps>`
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
