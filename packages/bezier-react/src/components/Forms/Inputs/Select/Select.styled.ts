/* Internal dependencies */
import {
  css,
  styled,
} from '~/src/foundation'

import DisabledOpacity from '~/src/constants/DisabledOpacity'
import type { InterpolationProps } from '~/src/types/Foundation'

import {
  erroredInputWrapperStyle,
  focusedInputWrapperStyle,
  inputTextStyle,
  inputWrapperStyle,
} from '~/src/components/Forms/Inputs/mixins'
import { Overlay } from '~/src/components/Overlay'

import { type SelectSize } from './Select.types'

export const Container = styled.div<InterpolationProps>`
  position: relative;

  ${({ interpolation }) => interpolation};
`

interface TriggerProps {
  hasError: boolean
  disabled: boolean
  readOnly: boolean
  active: boolean
  size: SelectSize
}

const focusedStyle = css`
  ${focusedInputWrapperStyle};
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lighter']};
`

export const Trigger = styled.button<TriggerProps>`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${({ size }) => size}px;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lightest']};

  ${inputTextStyle}

  ${inputWrapperStyle}

  ${({ foundation }) => foundation?.rounding?.round8}

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'box-shadow'])}

  ${({ active }) => active && focusedStyle}

  ${({ hasError }) => hasError && erroredInputWrapperStyle}

  ${({ readOnly }) => readOnly && css`
    cursor: initial;
    background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lighter']};
  `}

  &:disabled {
    cursor: not-allowed;
    opacity: ${DisabledOpacity};
  }

  &:not(:disabled):focus {
    ${focusedStyle}
  }

  ${({ readOnly }) => !readOnly && css`
    &:not(:disabled):hover {
      background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-lighter']};
    }
  `}
`

export const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
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
