import { type MouseEvent } from 'react'

import {
  type AdditionalStylableProps,
  type AdditionalTestIdProps,
  type BezierComponentProps,
  type ChildrenProps,
  type DisableProps,
} from '~/src/types/ComponentProps'

import type { FormComponentProps } from '~/src/components/Forms/Form.types'

interface RadioOptions {
  value?: any
  watchingValue?: any
  onClick?: (value: any, e: MouseEvent) => void
}

/**
 * @deprecated Use `RadioGroup` instead.
 */
export default interface RadioProps extends
  BezierComponentProps,
  ChildrenProps,
  FormComponentProps,
  AdditionalStylableProps<'dot'>,
  AdditionalTestIdProps<'handle'>,
  RadioOptions {}

export interface StyledRadioHandleProps extends DisableProps {
  checked: boolean
  hovered: boolean
}
