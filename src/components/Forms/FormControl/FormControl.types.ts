/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps, IdentifierProps } from 'Types/ComponentProps'
import type { FormLabelProps } from 'Components/Forms/FormLabel'
import type { FormComponentProps } from 'Components/Forms/Form.types'

interface FormControlOptions {
  label?: string
  labelPosition?: 'top' | 'left'
  help?: FormLabelProps['help']
  helperText?: string
  errorMessage?: string
}

export default interface FormControlProps extends
  BezierComponentProps,
  ChildrenProps,
  IdentifierProps,
  FormComponentProps,
  FormControlOptions {}
