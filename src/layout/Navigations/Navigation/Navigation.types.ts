/* Internal dependencies */
import { UIComponentProps, ChildrenComponentProps } from '../../../types/ComponentProps'

export default interface NavigationProps extends UIComponentProps, ChildrenComponentProps {
  minWidth: number
  _injected?: NavigationInjectedProps
}

interface NavigationInjectedProps {
  optionIndex: number
  onMouseDown?: (
    event: HTMLElementEventMap['mousedown'],
    optionIndex: number,
  ) => void
  onMouseUp?: () => void
  onMouseMove?: (event: HTMLElementEventMap['mousemove']) => void
}

export type EventHandler<K extends keyof HTMLElementEventMap> = (
  event: HTMLElementEventMap[K],
) => any
