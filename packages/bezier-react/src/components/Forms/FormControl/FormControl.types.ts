/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
  IdentifierProps,
} from '~/src/types/ComponentProps'
import type {
  FormComponentProps,
  FormFieldSize,
} from '~/src/components/Forms'

interface FormControlOptions {
  labelPosition?: 'top' | 'left'
  leftLabelWrapperHeight?: FormFieldSize
}

export interface FormControlContextCommonValue extends Partial<IdentifierProps> {}

export interface FormControlAriaProps {
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

interface WrapperProps {
  Wrapper: React.FunctionComponent<ChildrenProps>
}

interface CallbackRefProps {
  ref: (node: HTMLElement | null) => void
}

type PropsGetter<ExtraReturnType = {}> = <Props = {}>(props: Props) => Props & FormControlContextCommonValue & ExtraReturnType

export type GroupPropsGetter = PropsGetter<CallbackRefProps & FormControlAriaProps>

export type LabelPropsGetter = PropsGetter<WrapperProps>

export type FieldPropsGetter = PropsGetter<Omit<FormControlAriaProps, 'aria-labelledby'>>

export type HelperTextPropsGetter = PropsGetter<WrapperProps & CallbackRefProps & {
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

export interface ContainerProps extends
  BezierComponentProps,
  ChildrenProps,
  Pick<FormControlOptions, 'labelPosition'> {}

export interface FormControlProps extends
  BezierComponentProps,
  ChildrenProps,
  FormComponentProps,
  FormControlOptions {}
