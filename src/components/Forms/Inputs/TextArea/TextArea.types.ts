/* External dependencies */
import React from 'react'

/* Internal dependencies */
import type { BezierComponentProps, AdditionalStylableProps } from 'Types/ComponentProps'
import { FormComponentProps } from 'Components/Forms/Form.types'

export enum TextAreaHeight {
  Row3 = 3,
  Row6 = 6,
  Row10 = 10,
  Row16 = 16,
  Row24 = 24,
  Row36 = 36,
}

type TextAreaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>

interface TextAreaOptions {
  minRows?: TextAreaHeight
  maxRows?: TextAreaHeight
  autoFocus?: boolean
  onFocus?: TextAreaChangeEventHandler
  onBlur?: TextAreaChangeEventHandler
  onChange?: TextAreaChangeEventHandler
}

type OmittedTextareaHTMLAttributes = keyof FormComponentProps | 'onFocus' | 'onBlur'

export default interface TextAreaProps extends
  BezierComponentProps,
  FormComponentProps,
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, OmittedTextareaHTMLAttributes>,
  AdditionalStylableProps<'wrapper'>,
  TextAreaOptions {}
