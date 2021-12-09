/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, IdentifierProps } from 'Types/ComponentProps'
import { FormComponentProps } from 'Components/Forms/Form.types'

interface FormControlOptions {
  labelPosition: 'top' | 'left'
}

export default interface FormControlProps extends
  BezierComponentProps,
  ChildrenProps,
  IdentifierProps,
  FormComponentProps,
  FormControlOptions {}

export interface FormControlContextValue extends
  FormComponentProps,
  FormControlOptions {
  fieldId: string
  labelId: string
  helperTextId: string
  hasHelperText: boolean
  setHasHelperText: React.Dispatch<React.SetStateAction<boolean>>
}
