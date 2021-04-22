/* External dependencies */
import { FlattenSimpleInterpolation } from 'styled-components'

/* Internal dependencies */
import { css, styled } from '../../../foundation'
import { Icon } from '../../Icon'
import img from '../../Icon/assets/cancel-circle-filled.svg'
import { ThemeKey } from '../../../foundation/Theme/ThemeType'
import { WithInterpolation } from '../../../types/InjectedInterpolation'
import { InputWrapperStyle, focusedInputWrapperStyle, erroredInputWrapperStyle } from '../constants'
import { TextFieldSize, TextFieldVariant } from './TextField.types'

interface ClickableElementProps {
  clickable: boolean
}

const clickableElementStyle = css<ClickableElementProps>`
  cursor: pointer;
`

export const placeholderStyle = (themeKey:ThemeKey = 'txt-black-dark') => css`
  &::placeholder {
    color: ${({ foundation }) => foundation?.theme?.[themeKey] || 'txt-black-dark'} !important;
  }
`

const SearchInputStyle = css`
  &[type="search"] {
    appearance: textfield;
  }

  &[type="search"]::-webkit-search-decoration {
    appearance: none;
  }

  &[type="search"]::-webkit-search-cancel-button {
    appearance: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background: url(${img}) no-repeat 50% 50%;
    background-size: contain;
    opacity: 0.4;
    :hover {
      opacity: 0.6;
    }
  }
`

interface InputProps {
  disabled: boolean
  readOnly: boolean
  typo: FlattenSimpleInterpolation
}

const Input = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  ${({ typo }) => typo}
  padding: 0;

  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
  color: ${({ readOnly, foundation }) => readOnly && foundation?.theme?.['txt-black-darker']};
  color: ${({ disabled, foundation }) => disabled && foundation?.theme?.['txt-black-dark']};

  background-color: transparent;
  border: none;
  outline: none;

  ${({ type }) => type === 'search' && SearchInputStyle}

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
  background-color: ${({ variant, foundation }) => variant === 'secondary' && foundation?.theme?.['bg-black-lightest']};
  background-color: ${({ variant, readOnly, foundation }) =>
    variant === 'primary' && readOnly && foundation?.theme?.['bg-grey-lighter']};
  border-radius: 8px;
  opacity: ${({ disabled }) => disabled && 0.4};

  ${({ variant }) => variant === 'primary' && InputWrapperStyle};
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
