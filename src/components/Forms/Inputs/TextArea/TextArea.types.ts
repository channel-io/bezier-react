/* External dependencies */
import React, { CSSProperties } from 'react'

/* Internal dependencies */
import { BezierComponentProps } from '../../../../types/ComponentProps'
import InjectedInterpolation from '../../../../types/InjectedInterpolation'

export enum TextAreaHeight {
  Row3 = 3,
  Row6 = 6,
  Row10 = 10,
  Row16 = 16,
  Row24 = 24,
  Row36 = 36,
}

type TextAreaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>

export default interface TextAreaProps
  extends BezierComponentProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'readOnly' | 'disabled'> {
  minRows?: TextAreaHeight
  maxRows?: TextAreaHeight
  autoFocus?: boolean
  hasError?: boolean
  readOnly?: boolean
  disabled?: boolean
  wrapperInterpolation?: InjectedInterpolation
  wrapperStyle?: CSSProperties
  wrapperClassName?: string
  onFocus?: TextAreaChangeEventHandler
  onBlur?: TextAreaChangeEventHandler
  onChange?: TextAreaChangeEventHandler
}
