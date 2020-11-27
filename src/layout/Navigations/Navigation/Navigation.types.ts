/* Internal dependencies */
import { UIComponentProps, ChildrenComponentProps } from '../../../types/ComponentProps'

export default interface NavigationProps extends UIComponentProps, ChildrenComponentProps {
  minWidth: number
  optionIndex?: number
  onMouseDown?: (
    event: HTMLElementEventMap['mousedown'],
    optionIndex: number,
  ) => void
  onMouseUp?: () => void
  onMouseMove?: (event: HTMLElementEventMap['mousemove']) => void
}
