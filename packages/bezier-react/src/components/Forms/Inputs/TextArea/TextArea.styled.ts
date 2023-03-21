/* External dependencies */
import TextareaAutosize from 'react-textarea-autosize'

/* Internal dependencies */
import {
  hideScrollbars,
  type SemanticNames,
  styled,
  Typography,
} from '~/src/foundation'
import { type InterpolationProps } from '~/src/types/Foundation'
import DisabledOpacity from '~/src/constants/DisabledOpacity'
import {
  inputTextStyle,
  erroredInputWrapperStyle,
  focusedInputWrapperStyle,
  inputWrapperStyle,
  inputPlaceholderStyle,
} from '~/src/components/Forms/Inputs/mixins'

interface WrapperProps extends InterpolationProps {
  focused: boolean
  hasError?: boolean
  bgColor: SemanticNames
  disabled: boolean
}

const Wrapper = styled.div<WrapperProps>`
  ${inputWrapperStyle};

  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: ${({ foundation, bgColor }) => foundation?.theme?.[bgColor]};
  opacity: ${({ disabled }) => disabled && DisabledOpacity};

  ${({ focused }) => focused && focusedInputWrapperStyle}

  ${({ hasError }) => hasError && erroredInputWrapperStyle}

  ${({ foundation }) => foundation?.rounding.round8}

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['border-color', 'box-shadow'])};

  ${({ interpolation }) => interpolation}
`

interface TextAreaAutoSizeBaseProps extends InterpolationProps {
  disabled: boolean
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
  padding: 8px 12px;
  margin: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  resize: none;
  background: none;
  border: none;
  outline: none;

  ${hideScrollbars()}

  ${Typography.Size14}

  ${inputTextStyle}

  ${inputPlaceholderStyle}

  &::placeholder {
    ${Typography.Size14}
  }

  ${({ interpolation }) => interpolation}
`

export default {
  Wrapper,
  TextAreaAutoSizeBase,
}
