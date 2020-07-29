/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export enum CheckType {
  False,
  True,
  Partial,
}

export default interface CheckboxProps extends UIComponentProps {
  contentClassName?: string
  disabled?: boolean
  checked?: boolean | CheckType
}

export interface WrapperProps {
  disabled?: boolean
}

export interface CheckerProps {
  disabled?: boolean
  checked?: boolean
  partialChecked?: boolean
}

export interface ContentProps {
  className?: string
}
