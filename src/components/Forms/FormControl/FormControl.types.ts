/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps, IdentifierProps } from 'Types/ComponentProps'
import type { FormComponentProps } from 'Components/Forms/Form.types'

interface FormControlOptions {
  labelPosition?: 'top' | 'left'
}

interface FormControlContextCommonValue extends IdentifierProps {
  Wrapper: React.FunctionComponent
}

type PropsGetter<ExtraReturnType = {}> = <Props = {}>(props: Props)
  => Props & FormControlContextCommonValue & ExtraReturnType

export type LabelPropsGetter = PropsGetter

export type FieldPropsGetter = PropsGetter<{
  'aria-describedby'?: string
}>

export type HelperTextPropsGetter = PropsGetter<{
  setHasHelperText: React.Dispatch<React.SetStateAction<boolean>>
}>

export interface FormContextValue extends FormComponentProps {
  id: string
  labelId: string
  helperTextId: string
  getLabelProps: LabelPropsGetter
  getFieldProps: FieldPropsGetter
  getHelperTextProps: HelperTextPropsGetter
}

export default interface FormControlProps extends
  BezierComponentProps,
  ChildrenProps,
  Omit<FormComponentProps, 'aria-describedby'>,
  FormControlOptions {}
