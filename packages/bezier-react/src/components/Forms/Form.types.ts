import type {
  DisableProps,
  IdentifierProps,
} from '~/src/types/ComponentProps'

interface FormComponentOwnProps {
  hasError?: boolean
  required?: boolean
  readOnly?: boolean
}

export interface FormComponentProps extends
  DisableProps,
  Partial<IdentifierProps>,
  FormComponentOwnProps {}

export type FormFieldSize = 'xl' | 'l' | 'm' | 'xs'
