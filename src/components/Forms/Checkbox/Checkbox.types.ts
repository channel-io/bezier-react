/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'
import CheckType from './CheckType'

export default interface CheckboxProps extends ChildrenComponentProps {
  checkerTestId?: string
  contentClassName?: string
  disabled?: boolean
  checked?: boolean | CheckType
  onClick?: () => void
}
