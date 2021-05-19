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
}

// TODO: Size variant
export const Trigger = styled.div<TriggerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darker']};
  ${({ foundation }) => foundation?.rounding?.round8};
  ${inputWrapperStyle};
  cursor: pointer;

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
  width: 100%;
  min-width: 200px;
  min-height: 42px;
  max-height: 640px;

  ${({ foundation }) => foundation?.rounding?.round8};
  ${({ foundation }) => foundation?.elevation?.ev3()};
`
