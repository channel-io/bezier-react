import { type TextProps } from '~/src/beta/Text'
import type {
  FormFieldProps as BaseFormFieldProps,
  BezierComponentProps,
  ChildrenProps,
  IdentifierProps,
  MarginProps,
} from '~/src/types/props'

export type FormFieldLabelPosition = 'top' | 'left'

export interface FormProps
  extends BezierComponentProps<'form'>,
    ChildrenProps {}

export interface FormFieldAriaProps {
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

interface CallbackRefProps {
  ref: (node: HTMLElement | null) => void
}

interface FormFieldClassNameProps {
  className: string
}

type PropsGetter<ExtraReturnType = {}> = <Props = {}>(
  props: Props
) => Props & Partial<IdentifierProps> & ExtraReturnType

export type GroupPropsGetter = PropsGetter<
  CallbackRefProps & FormFieldAriaProps
>

export type LabelPropsGetter = PropsGetter<FormFieldClassNameProps>

export type FieldPropsGetter = PropsGetter<
  Omit<FormFieldAriaProps, 'aria-labelledby'>
>

export type HelperTextPropsGetter = PropsGetter<
  FormFieldClassNameProps &
    CallbackRefProps & {
      visible: boolean
    }
>

export type ErrorMessagePropsGetter = HelperTextPropsGetter

export interface FormFieldContextValue extends BaseFormFieldProps {
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

interface FormFieldOwnProps {
  /**
   * Layout position of the label.
   * Left layouts share grid rows between the label/description and controls.
   * Group a control and its error in one vertical container with a 4px gap
   * if the error must stay immediately below the control regardless of label height.
   * @default 'top'
   */
  labelPosition?: FormFieldLabelPosition
}

export interface FormFieldContainerProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    Pick<FormFieldOwnProps, 'labelPosition'> {}

export interface FormFieldProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    BaseFormFieldProps,
    FormFieldOwnProps {}

interface FormLabelOwnProps {
  htmlFor?: string
  help?: React.ReactNode
}

export interface FormLabelProps
  extends Omit<TextProps, keyof MarginProps>,
    ChildrenProps,
    Partial<IdentifierProps>,
    FormLabelOwnProps {}

interface BaseHelperTextOwnProps {
  type: 'info' | 'error'
}

export interface BaseHelperTextProps
  extends Omit<TextProps, keyof MarginProps>,
    ChildrenProps,
    Partial<IdentifierProps>,
    BaseHelperTextOwnProps {}

export interface FormHelperTextProps
  extends Omit<BaseHelperTextProps, 'type'> {}

export interface FormErrorMessageProps extends FormHelperTextProps {}

type FormGroupDirection = 'horizontal' | 'vertical'

export interface FormGroupProps
  extends BezierComponentProps<'div'>,
    ChildrenProps {
  direction?: FormGroupDirection
  spacing?: string | number
}
