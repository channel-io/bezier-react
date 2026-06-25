import type { ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  BaseTextInputProps,
  TextInputElementType,
  TextInputRef,
} from '~/src/beta/BaseTextInput'
import type { FormFieldProps } from '~/src/types/props'

export type TextInputType = Exclude<TextInputElementType, 'search'>

export type TextInputVariant = 'primary' | 'secondary'

export type TextInputSideContent = string | BezierIcon | ReactNode

interface TextInputOwnProps {
  type?: TextInputType
  variant?: TextInputVariant
  leadingContent?: TextInputSideContent
  trailingContent?: TextInputSideContent
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
