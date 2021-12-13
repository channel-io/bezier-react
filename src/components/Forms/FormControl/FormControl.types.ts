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

export interface FormContextValue {
  id: string
  labelId: string
  helperTextId: string
}

type FormComponent = React.ReactElement<FormComponentProps>

type FormControlChildren = FormComponent | ((value: FormContextValue) => FormComponent)

export default interface FormControlProps extends
  BezierComponentProps,
  ChildrenProps<FormControlChildren>,
  Omit<FormComponentProps, 'aria-describedby'>,
  FormControlOptions {}
