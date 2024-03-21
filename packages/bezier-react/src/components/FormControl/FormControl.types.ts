import type {
  BezierComponentProps,
  ChildrenProps,
  FormFieldProps,
  FormFieldSize,
  IdentifierProps,
  SizeProps,
} from '~/src/types/props'

type LabelPosition = 'top' | 'left'

interface FormControlOwnProps {
  labelPosition?: LabelPosition
}

interface FormControlClassNameProps {
  className: string
}

export interface FormControlAriaProps {
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

interface CallbackRefProps {
  ref: (node: HTMLElement | null) => void
}

type PropsGetter<ExtraReturnType = {}> = <Props = {}>(
  props: Props
) => Props & Partial<IdentifierProps> & ExtraReturnType

export type GroupPropsGetter = PropsGetter<
  CallbackRefProps & FormControlAriaProps
>

export type LabelPropsGetter = PropsGetter<FormControlClassNameProps>

export type FieldPropsGetter = PropsGetter<
  Omit<FormControlAriaProps, 'aria-labelledby'>
>

export type HelperTextPropsGetter = PropsGetter<
  FormControlClassNameProps &
    CallbackRefProps & {
      visible: boolean
    }
>

export type ErrorMessagePropsGetter = HelperTextPropsGetter

export interface FormControlContextValue extends FormFieldProps {
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

export interface ContainerProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    Pick<FormControlOwnProps, 'labelPosition'> {}

export interface FormControlProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    FormFieldProps,
    SizeProps<FormFieldSize>,
    FormControlOwnProps {}
