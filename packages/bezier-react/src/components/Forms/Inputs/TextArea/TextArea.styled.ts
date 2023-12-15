import TextareaAutosize from 'react-textarea-autosize'

import {
  type SemanticNames,
  Typography,
  hideScrollbars,
  styled,
} from '~/src/foundation'

import { type InterpolationProps } from '~/src/types/Foundation'

import {
  erroredInputWrapperStyle,
  focusedInputWrapperStyle,
  inputPlaceholderStyle,
  inputTextStyle,
  inputWrapperStyle,
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
  opacity: ${({ disabled }) => disabled && 'var(--opacity-disabled)'};

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

const TextAreaAutoSizeBase = styled(TextareaAutosize)<TextAreaAutoSizeBaseProps>`
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
