/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import type { FormLabelProps } from 'Components/Forms/FormLabel'
import type { FormComponentProps } from 'Components/Forms/Form.types'

interface FormControlOptions {
  label?: string
  labelPosition?: 'top' | 'left'
  help?: FormLabelProps['help']
  helperText?: string
  errorMessage?: string
}

type FormFieldType = React.ReactElement<FormComponentProps> | React.ReactElement<FormComponentProps>[]

export default interface FormControlProps extends
  BezierComponentProps,
  ChildrenProps<FormFieldType>,
  FormComponentProps,
  FormControlOptions {}
