import type {
  DisableProps,
  IdentifierProps,
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
