/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface ContentAreaProps extends UIComponentProps{
  onResizingMouseDown: (e: MouseEvent) => void
  onResizerMouseMove: (e: HTMLElementEventMap['mousedown']) => void
}
