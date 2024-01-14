import type React from 'react'

import type { AlphaBezierComponentProps } from '~/src/types/ComponentProps'

import { type FormComponentProps } from '~/src/components/Forms/Form.types'

export enum TextAreaHeight {
  Row3 = 3,
  Row6 = 6,
  Row10 = 10,
  Row16 = 16,
  Row24 = 24,
  Row36 = 36,
}

interface TextAreaOwnProps {
  minRows?: TextAreaHeight
  maxRows?: TextAreaHeight
  autoFocus?: boolean
}

export interface TextAreaProps extends
  AlphaBezierComponentProps,
  FormComponentProps,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  TextAreaOwnProps {}
