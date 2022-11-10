/* Internal dependencies */
import { styled } from 'Foundation'
import DisabledOpacity from 'Constants/DisabledOpacity'
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

interface SwitchRootProps extends Required<SwitchProps> {}

export const SwitchRoot = styled.button<SwitchRootProps>`
  position: relative;

  width: ${({ size }) => SWITCH_WIDTH[size]}px;
  height: ${({ size }) => SWITCH_HEIGHT[size]}px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ foundation }) => foundation?.rounding?.round12}
  background-color: ${({ checked, foundation }) => (
    checked
      ? foundation?.theme?.['bgtxt-green-normal']
      : foundation?.theme?.['bg-black-dark']
  )};

  opacity: ${({ disabled }) => (disabled ? DisabledOpacity : 'initial')};

  &:hover {
    background-color: ${({ checked, foundation }) => (
    checked
      ? foundation?.theme?.['bgtxt-green-dark']
      : foundation?.theme?.['bg-black-dark']
  )};
  }

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'opacity'])};
`

interface SwitchThumbProps extends SwitchProps {
  size: NonNullable<SwitchProps['size']>
  checked: NonNullable<SwitchProps['checked']>
}

export const SwitchThumb = styled.span<SwitchThumbProps>`
  position: absolute;
  top: ${PADDING}px;
  left: ${PADDING}px;

  width: ${({ size }) => SWITCH_HANDLE_WIDTH_HEIGHT[size]}px;
  height: ${({ size }) => SWITCH_HANDLE_WIDTH_HEIGHT[size]}px;
  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ foundation }) => foundation?.elevation?.ev2()};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-white-dark']};

  transform: ${({ checked, size }) => (
    checked
      ? `translateX(${SWITCH_WIDTH[size] - SWITCH_HANDLE_WIDTH_HEIGHT[size] - (PADDING * 2)}px)`
      : 'initial'
  )};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['transform'])};
`
