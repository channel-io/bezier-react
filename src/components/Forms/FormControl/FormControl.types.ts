/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps, IdentifierProps } from 'Types/ComponentProps'
import type { FormComponentProps } from 'Components/Forms/Form.types'

type LabelPositionType = 'top' | 'left'

interface FormControlOptions {
  labelPosition?: LabelPositionType
  leftLabelWrapperHeight?: number
}

export interface FormControlContextCommonValue extends Partial<IdentifierProps> {}

export interface FormControlAriaProps {
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

interface WrapperProps {
  Wrapper: React.FunctionComponent
}

interface SetRenderedProps {
  setIsRendered: React.Dispatch<React.SetStateAction<boolean>>
}

interface LabelProps {
  labelPosition?: LabelPositionType
}

type PropsGetter<ExtraReturnType = {}> = <Props = {}>(props: Props) => Props & FormControlContextCommonValue & ExtraReturnType

export type GroupPropsGetter = PropsGetter<SetRenderedProps & FormControlAriaProps>

export type LabelPropsGetter = PropsGetter<WrapperProps & LabelProps>

export type FieldPropsGetter = PropsGetter<Omit<FormControlAriaProps, 'aria-labelledby'>>

export type HelperTextPropsGetter = PropsGetter<WrapperProps & SetRenderedProps & {
  visible: boolean
}>

export type ErrorMessagePropsGetter = HelperTextPropsGetter

export interface FormControlContextValue extends FormComponentProps {
  id: string
  labelId: string
  helperTextId: string
  errorMessageId: string
  getGroupProps: GroupPropsGetter
  getLabelProps: LabelPropsGetter
  getFieldProps: FieldPropsGetter
  getHelperTextProps: HelperTextPropsGetter
  getErrorMessageProps: ErrorMessagePropsGetter
}

export default interface FormControlProps extends
  BezierComponentProps,
  ChildrenProps,
  FormComponentProps,
  FormControlOptions {}
