/* External dependencies */
import React, { CSSProperties } from 'react'
import { TextareaAutosizeProps } from 'react-textarea-autosize'

/* Internal dependencies */
import { UIComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'

export interface TextAreaProps extends UIComponentProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  wrapperInterpolation?: InjectedInterpolation
  wrapperStyle?: CSSProperties
  wrapperClassName?: string
  autoFocus?: boolean
  value?: string
  hasError?: boolean
  maxRows?: TextareaAutosizeProps['maxRows']
  minRows?: TextareaAutosizeProps['minRows']
  onFocus?: React.ChangeEventHandler<HTMLTextAreaElement>
  onBlur?: React.ChangeEventHandler<HTMLTextAreaElement>
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}
