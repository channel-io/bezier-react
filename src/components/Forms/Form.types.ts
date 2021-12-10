/* Internal dependencies */
import type { IdentifierProps, DisableProps } from 'Types/ComponentProps'

interface FormComponentOptions {
  hasError?: boolean
  readOnly?: boolean
  ['aria-describedby']?: string
}

export interface FormComponentProps extends
  DisableProps,
  Partial<IdentifierProps>,
  FormComponentOptions {}
