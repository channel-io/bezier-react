import type {
  BezierComponentProps,
  FormFieldProps,
  SizeProps,
} from '~/src/types/props'

export type TextInputElementType =
  | 'text'
  | 'search'
  | 'email'
  | 'password'
  | 'tel'
  | 'url'
  | 'number'

export type TextInputSize = 'm' | 'l'

export type SelectionRangeDirections = 'forward' | 'backward' | 'none'

export interface TextInputRef {
  focus(options?: FocusOptions): void
  blur(): void
  setSelectionRange(
    start?: number,
    end?: number,
    direction?: SelectionRangeDirections
  ): void
  getSelectionRange(): [number, number]
  selectAll(): void
  unselect(): void
  getBoundingClientRect(): ClientRect | DOMRect
  getDOMNode(): HTMLInputElement | null
}

type OmittedInputHTMLAttributes =
  | 'type'
  | 'size'
  | 'disabled'
  | 'readOnly'
  | 'required'
  | 'className'
  | 'style'
  | 'onFocus'
  | 'onChange'
  | 'onKeyDown'
  | 'onKeyUp'

interface BaseTextInputOwnProps {
  type?: TextInputElementType
  className?: string
  style?: React.CSSProperties
  inputClassName?: string
  inputStyle?: React.CSSProperties
  leadingSlot?: React.ReactNode
  trailingSlot?: React.ReactNode
  withoutLeadingSlotWrapper?: boolean
  withoutTrailingSlotWrapper?: boolean
  selectAllOnInit?: boolean
  selectAllOnFocus?: boolean
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
}

export interface BaseTextInputProps
  extends Omit<BezierComponentProps<'input'>, OmittedInputHTMLAttributes>,
    FormFieldProps,
    SizeProps<TextInputSize>,
    BaseTextInputOwnProps {}
