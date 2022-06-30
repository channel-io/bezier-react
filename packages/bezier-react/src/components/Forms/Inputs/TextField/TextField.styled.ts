/* External dependencies */
import { FlattenSimpleInterpolation } from 'styled-components'

/* Internal dependencies */
import { css, styled, Typography, SemanticNames } from 'Foundation'
import DisabledOpacity from 'Constants/DisabledOpacity'
import { InterpolationProps } from 'Types/Foundation'
import { LegacyIcon } from 'Components/Icon'
import {
  inputTextStyle,
  inputPlaceholderStyle,
  inputWrapperStyle,
  focusedInputWrapperStyle,
  erroredInputWrapperStyle,
} from 'Components/Forms/Inputs/mixins'
import { TextFieldSize, TextFieldVariant } from './TextField.types'

interface ClickableElementProps {
  clickable: boolean
}

const clickableElementStyle = css`
  cursor: pointer;
`

const Input = styled.input<InterpolationProps>`
  width: 100%;
  height: 100%;
  padding: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  background-color: transparent;
  border: none;
  outline: none;

  ${Typography.Size14}

  ${inputTextStyle}

  ${inputPlaceholderStyle}

  ${({ interpolation }) => interpolation}
`

const LeftIcon = styled(LegacyIcon)<ClickableElementProps>`
  ${({ clickable }) => clickable && clickableElementStyle}
`

const LeftContentWrapper = styled.div<InterpolationProps>`
  display: flex;
  align-items: center;
  padding-right: 6px;

  ${({ interpolation }) => interpolation}
`

const RightContentWrapper = styled.div<InterpolationProps>`
  display: flex;
  align-items: center;
  padding-right: 2px;

  ${({ interpolation }) => interpolation}
`

const RightItemWrapper = styled.div<ClickableElementProps & InterpolationProps>`
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
  borderRadius?: FlattenSimpleInterpolation
  hasError?: boolean
  focused?: boolean
  disabled?: boolean
}

const Wrapper = styled.div<WrapperProps & InterpolationProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: ${({ size }) => size}px;
  padding: 0 12px;
  background-color: ${({ foundation, bgColor }) => foundation?.theme?.[bgColor]};

  ${({ borderRadius }) => borderRadius}
  opacity: ${({ disabled }) => disabled && DisabledOpacity};

  ${({ variant }) => variant === TextFieldVariant.Primary && inputWrapperStyle}
  ${({ focused }) => focused && focusedInputWrapperStyle}
  ${({ hasError }) => hasError && erroredInputWrapperStyle}

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['border-color', 'box-shadow'])}

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
