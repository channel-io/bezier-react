import { type MouseEvent } from 'react'

import {
  type AdditionalStylableProps,
  type AdditionalTestIdProps,
  type BezierComponentProps,
  type ChildrenProps,
  type DisableProps,
} from '~/src/types/ComponentProps'

import type { FormComponentProps } from '~/src/components/Forms/Form.types'

interface LegacyRadioOptions {
  value?: any
  watchingValue?: any
  onClick?: (value: any, e: MouseEvent) => void
}

/**
 * @deprecated Use `RadioGroup` instead.
 */
export interface LegacyRadioProps extends
  BezierComponentProps,
  ChildrenProps,
  FormComponentProps,
  AdditionalStylableProps<'dot'>,
  AdditionalTestIdProps<'handle'>,
  LegacyRadioOptions {}

export interface StyledRadioHandleProps extends DisableProps {
  checked: boolean
  hovered: boolean
}
