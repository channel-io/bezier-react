/* Internal dependencies */
import { styled } from '~/src/foundation'
import DisabledOpacity from '~/src/constants/DisabledOpacity'
import { focusedInputWrapperStyle } from '~/src/components/Forms/Inputs/mixins'
import type SwitchProps from './Switch.types'
import { SwitchSize } from './Switch.types'

const PADDING = 3

const SWITCH_WIDTH: Record<SwitchSize, number> = {
  [SwitchSize.M]: 36,
  [SwitchSize.S]: 30,
}

const SWITCH_HEIGHT: Record<SwitchSize, number> = {
  [SwitchSize.M]: 24,
  [SwitchSize.S]: 20,
}

const SWITCH_HANDLE_WIDTH_HEIGHT: Record<SwitchSize, number> = {
  [SwitchSize.M]: 18,
  [SwitchSize.S]: 14,
}

interface SwitchRootProps extends SwitchProps {
  size: NonNullable<SwitchProps['size']>
}

export const SwitchRoot = styled.button<SwitchRootProps>`
  all: unset;

  position: relative;

  width: ${({ size }) => SWITCH_WIDTH[size]}px;
  height: ${({ size }) => SWITCH_HEIGHT[size]}px;

  cursor: pointer;

  ${({ foundation }) => foundation?.rounding?.round12}

  background-color: ${({ foundation }) => foundation?.theme?.['bg-black-dark']};

  &[data-state='checked'] {
    background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-green-normal']};

    &:hover {
      background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-green-dark']};
    }
  }

  opacity: initial;

  &:disabled {
    cursor: not-allowed;
    opacity: ${DisabledOpacity};
  }

  &:focus-visible {
    ${focusedInputWrapperStyle}
  }

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'opacity'])};
`

interface SwitchThumbProps extends SwitchProps {
  size: NonNullable<SwitchProps['size']>
}

export const SwitchThumb = styled.span<SwitchThumbProps>`
  all: unset;

  position: absolute;
  top: ${PADDING}px;
  left: ${PADDING}px;

  width: ${({ size }) => SWITCH_HANDLE_WIDTH_HEIGHT[size]}px;
  height: ${({ size }) => SWITCH_HANDLE_WIDTH_HEIGHT[size]}px;
  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ foundation }) => foundation?.elevation?.ev2()};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-white-dark']};

  transform: initial;

  &[data-state='checked'] {
    transform: ${({ size }) => `translateX(${SWITCH_WIDTH[size] - SWITCH_HANDLE_WIDTH_HEIGHT[size] - (PADDING * 2)}px)`};
  }

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['transform'])};
`
