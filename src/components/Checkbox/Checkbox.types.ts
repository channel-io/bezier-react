/* Internal dependencies */
import {
  UIComponentProps,
  ChildrenComponentProps,
} from '../../types/ComponentProps'
import CheckType from './CheckType'

export default interface CheckboxProps extends ChildrenComponentProps {
  checkerTestId?: string
  contentClassName?: string
  disabled?: boolean
  checked?: boolean | CheckType
  onClick?: () => void
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
