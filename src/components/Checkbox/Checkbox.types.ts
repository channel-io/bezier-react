/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import CheckType from './CheckType'

export default interface CheckboxProps extends UIComponentProps {
  contentClassName?: string
  disabled?: boolean
  checked?: boolean | CheckType
}

export interface StyledWrapperProps extends UIComponentProps {
  disabled?: boolean
}

export interface StyledCheckerProps extends UIComponentProps {
  disabled?: boolean
  checkStatus?: CheckType
}

export interface StyledContentProps extends UIComponentProps {
  className?: string
}
