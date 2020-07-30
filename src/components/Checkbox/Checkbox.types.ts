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

export interface StyledWrapperProps {
  disabled?: boolean
}

export interface StyledCheckerProps {
  disabled?: boolean
  checked?: boolean
  partialChecked?: boolean
}

export interface StyledContentProps {
  className?: string
}
