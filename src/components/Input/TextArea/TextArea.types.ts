/* External dependencies */
import React, { CSSProperties } from 'react'
import { TextareaAutosizeProps } from 'react-textarea-autosize'

/* Internal dependencies */
import { UIComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'

type TextAreaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>

export interface TextAreaProps extends UIComponentProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  wrapperInterpolation?: InjectedInterpolation
  wrapperStyle?: CSSProperties
  wrapperClassName?: string
  autoFocus?: boolean
  value?: string
  hasError?: boolean
  maxRows?: TextareaAutosizeProps['maxRows']
  minRows?: TextareaAutosizeProps['minRows']
  height?: number
  onFocus?: TextAreaChangeEventHandler
  onBlur?: TextAreaChangeEventHandler
  onChange?: TextAreaChangeEventHandler
}
