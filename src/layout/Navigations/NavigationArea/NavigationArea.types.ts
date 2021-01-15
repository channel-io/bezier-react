/* Internal dependencies */
import { ChildrenComponentProps } from '../../../types/ComponentProps'

export default interface NavigationProps extends Omit<ChildrenComponentProps, 'as'> {
  hidable?: boolean
  disableResize?: boolean

  /* cloneElement Props */
  optionIndex?: number
  onMouseDown?: (
    event: HTMLElementEventMap['mousedown'],
    optionIndex: number,
  ) => void
  onMouseUp?: () => void
  onMouseMove?: (event: HTMLElementEventMap['mousemove']) => void
}
