import type {
  AlphaBezierComponentProps,
  BezierComponentProps,
  ChildrenProps,
  IdentifierProps,
} from '~/src/types/ComponentProps'

import type {
  FormComponentProps,
  FormFieldSize,
} from '~/src/components/Forms'

type LabelPosition = 'top' | 'left'

interface FormControlOptions {
  leftLabelWrapperHeight?: FormFieldSize
  labelPosition?: LabelPosition
}

interface FormControlClassNameProps {
  className: string
}

export interface FormControlContextCommonValue extends Partial<IdentifierProps> {}

export interface FormControlAriaProps {
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

interface CallbackRefProps {
  ref: (node: HTMLElement | null) => void
}

type PropsGetter<ExtraReturnType = {}> = <Props = {}>(props: Props) => Props & FormControlContextCommonValue & ExtraReturnType

export type GroupPropsGetter = PropsGetter<CallbackRefProps & FormControlAriaProps>

export type LabelPropsGetter = PropsGetter<FormControlClassNameProps>

export type FieldPropsGetter = PropsGetter<Omit<FormControlAriaProps, 'aria-labelledby'>>

export type HelperTextPropsGetter = PropsGetter<FormControlClassNameProps & CallbackRefProps & {
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
  AlphaBezierComponentProps,
  ChildrenProps,
  Pick<FormControlOptions, 'labelPosition'> {}

export interface FormControlProps extends
  BezierComponentProps,
  ChildrenProps,
  FormComponentProps,
  FormControlOptions {}
