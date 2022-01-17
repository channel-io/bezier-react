/* Internal dependencies */
import { styled, css, ellipsis } from 'Foundation'
import DisabledOpacity from 'Constants/DisabledOpacity'
import type { InterpolationProps } from 'Types/Foundation'
import { Overlay } from 'Components/Overlay'
import { Text } from 'Components/Text'
import {
  inputTextStyle,
  inputWrapperStyle,
  focusedInputWrapperStyle,
  erroredInputWrapperStyle,
} from 'Components/Forms/Inputs/mixins'
import { SelectSize } from './Select.types'

export const Container = styled.div<InterpolationProps>`
  position: relative;

  ${({ interpolation }) => interpolation};
`

interface TriggerProps {
  focus: boolean
  error: boolean
  disabled: boolean
  readOnly: boolean
  size: SelectSize
}

function selectSizeConverter(size: SelectSize) {
  switch (size) {
    case SelectSize.XL:
      return css`
        height: 54px;
      `
    case SelectSize.L:
      return css`
        height: 44px;
      `
    case SelectSize.S:
      return css`
        height: 28px;
      `
    case SelectSize.M:
    default:
      return css`
        height: 36px;
      `
  }
}

export const Trigger = styled.div<TriggerProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  cursor: ${({ disabled, readOnly }) => {
    if (disabled) { return 'not-allowed' }
    if (readOnly) { return 'initial' }
    return 'pointer'
  }};
  user-select: none;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lightest']};

  ${inputTextStyle}

  ${inputWrapperStyle};

  ${({ size }) => selectSizeConverter(size)};

  ${({ foundation }) => foundation?.rounding?.round8};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'box-shadow'])};

  ${({ focus }) => focus && css`
    ${focusedInputWrapperStyle};
    background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lighter']};
  `};

  ${({ error }) => error && erroredInputWrapperStyle};

  ${({ disabled }) => disabled && css`
    opacity: ${DisabledOpacity};
  `};

  ${({ disabled, readOnly }) => !disabled && !readOnly && css`
    &:hover {
      background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lighter']};
    }
  `}
`

export const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`

export const TextContainer = styled(Text)`
  ${ellipsis()}
`

interface DropdownProps extends InterpolationProps {
  zIndex: number
}

export const Dropdown = styled(Overlay)<DropdownProps>`
  z-index: ${({ zIndex }) => zIndex};
  min-width: 200px;
  min-height: 42px;
  max-height: 640px;

  ${({ foundation }) => foundation?.rounding?.round8};
  ${({ foundation }) => foundation?.elevation?.ev3()};

  ${({ interpolation }) => interpolation}
`
