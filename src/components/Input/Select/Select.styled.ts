/* Internal dependencies */
import {
  styled,
  css,
} from '../../../foundation'
import DisabledOpacity from '../../../constants/DisabledOpacity'
import InjectedInterpolation from '../../../types/InjectedInterpolation'
import { Overlay } from '../../Overlay'
import {
  inputWrapperStyle,
  focusedInputWrapperStyle,
  erroredInputWrapperStyle,
} from '../constants/InputWrapperStyle'
import { SelectSize } from './Select.types'

interface ContainerProps {
  interpolation?: InjectedInterpolation
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  ${({ interpolation }) => interpolation};
`

interface TriggerProps {
  focus: boolean
  error: boolean
  disabled: boolean
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
  ${({ size }) => selectSizeConverter(size)};
  padding: 8px 12px;
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darker']};
  ${({ foundation }) => foundation?.rounding?.round8};
  ${inputWrapperStyle};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lightest']};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'box-shadow'])};

  &:hover {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lighter']};
  }

  ${({ focus }) => focus && css`
    ${focusedInputWrapperStyle};
    background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lighter']};
  `};

  ${({ error }) => error && erroredInputWrapperStyle};

  ${({ disabled }) => disabled && css`
    opacity: ${DisabledOpacity};
  `};
`

export const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Dropdown = styled(Overlay)`
  z-index: 10;
  width: 100%;
  min-width: 200px;
  min-height: 42px;
  max-height: 640px;

  ${({ foundation }) => foundation?.rounding?.round8};
  ${({ foundation }) => foundation?.elevation?.ev3()};
`
