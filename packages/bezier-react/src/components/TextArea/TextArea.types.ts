import { type TextareaAutosizeProps } from 'react-textarea-autosize'

import type { BezierComponentProps, FormFieldProps } from '~/src/types/props'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type TextAreaHeight = 3 | 6 | 10 | 16 | 24 | 36

interface TextAreaOwnProps {
  minRows?: TextAreaHeight
  maxRows?: TextAreaHeight
  autoFocus?: boolean
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface TextAreaProps
  extends Omit<BezierComponentProps<'textarea'>, 'style'>,
    Pick<TextareaAutosizeProps, 'style'>,
    FormFieldProps,
    TextAreaOwnProps {}
