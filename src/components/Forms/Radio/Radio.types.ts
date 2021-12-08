/* External dependencies */
import { MouseEvent } from 'react'

/* Internal dependencies */
import {
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  AdditionalTestIdProps,
  AdditionalStylableProps,
} from 'Types/ComponentProps'

interface RadioOptions {
  value?: any
  watchingValue?: any
  onClick?: (value: any, e: MouseEvent) => void
}

export default interface RadioProps extends
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  AdditionalStylableProps<'dot'>,
  AdditionalTestIdProps<'handle'>,
  RadioOptions {}

export interface StyledRadioHandleProps extends DisableProps {
  checked: boolean
  hovered: boolean
}
