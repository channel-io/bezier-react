/* External dependencies */
import React, { CSSProperties } from 'react'

/* Internal dependencies */
import { UIComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'

export enum TextAreaHeight {
  Row3 = 3,
  Row6 = 6,
  Row10 = 10,
  Row16 = 16,
  Row24 = 24,
  Row36 = 36,
}

type TextAreaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>

export default interface TextAreaProps extends UIComponentProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  wrapperInterpolation?: InjectedInterpolation
  wrapperStyle?: CSSProperties
  wrapperClassName?: string
  autoFocus?: boolean
  value?: string
  hasError?: boolean
  minRows?: TextAreaHeight
  maxRows?: TextAreaHeight
  height?: number
  onFocus?: TextAreaChangeEventHandler
  onBlur?: TextAreaChangeEventHandler
  onChange?: TextAreaChangeEventHandler
}
