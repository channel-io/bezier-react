import { type TextareaAutosizeProps } from 'react-textarea-autosize'

import type {
  BezierComponentProps,
  FormFieldProps,
} from '~/src/types/props'

// TODO: Use number literal types instead of enums
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
  Omit<BezierComponentProps<'textarea'>, 'style'>,
  Pick<TextareaAutosizeProps, 'style'>,
  FormFieldProps,
  TextAreaOwnProps {}
