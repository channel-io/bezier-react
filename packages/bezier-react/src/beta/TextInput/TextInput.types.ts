import type { ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  BaseTextInputProps,
  TextInputElementType,
  TextInputRef,
} from '~/src/beta/BaseTextInput'
import type {
  FormFieldProps,
  LeadingTrailingContentProps,
} from '~/src/types/props'

export type TextInputType = Exclude<TextInputElementType, 'search'>

export type TextInputVariant = 'primary' | 'secondary'

export type TextInputSideContent = string | BezierIcon | ReactNode

interface TextInputOwnProps
  extends LeadingTrailingContentProps<TextInputSideContent> {
  type?: TextInputType
  variant?: TextInputVariant
  withoutLeadingContentWrapper?: boolean
  withoutTrailingContentWrapper?: boolean
}

type OmittedBaseTextInputProps =
  | 'type'
  | 'leadingSlot'
  | 'trailingSlot'
  | 'withoutLeadingSlotWrapper'
  | 'withoutTrailingSlotWrapper'

export interface TextInputProps
  extends Omit<BaseTextInputProps, OmittedBaseTextInputProps>,
    FormFieldProps,
    TextInputOwnProps {}

export type { TextInputRef }
