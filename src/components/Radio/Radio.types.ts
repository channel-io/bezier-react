/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface RadioProps extends ChildrenComponentProps {
  label?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean, e: MouseEvent) => void
}
