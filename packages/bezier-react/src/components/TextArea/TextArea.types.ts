import { type TextareaAutosizeProps } from 'react-textarea-autosize'

import type {
  BezierComponentProps,
  FormFieldProps,
} from '~/src/types/props'

export type TextAreaHeight =
| 3
| 6
| 10
| 16
| 24
| 36

interface TextAreaOwnProps {
  minRows?: TextAreaHeight
  maxRows?: TextAreaHeight
  autoFocus?: boolean
}

export interface TextAreaProps extends
  Omit<BezierComponentProps<'textarea'>, 'style'>,
  Pick<TextareaAutosizeProps, 'style'>,
  FormFieldProps,
  TextAreaOwnProps {}
