/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface ContentAreaProps extends UIComponentProps{
  onResizing: (e: HTMLElementEventMap['mousedown']) => void
  onResizingMouseDown: (e: MouseEvent) => void
  onResizerMouseUp: () => void
}
