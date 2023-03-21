/* Internal dependencies */
import type {
  IdentifierProps,
  DisableProps,
} from '~/src/types/ComponentProps'

interface FormComponentOptions {
  hasError?: boolean
  required?: boolean
  readOnly?: boolean
}

export interface FormComponentProps extends
  DisableProps,
  Partial<IdentifierProps>,
  FormComponentOptions {}
