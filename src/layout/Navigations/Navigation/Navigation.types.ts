/* Internal dependencies */
import { Ref } from 'react'
import { ChildrenComponentProps } from '../../../types/ComponentProps'

export default interface NavigationProps extends Omit<ChildrenComponentProps, 'as'> {
  header?: React.ReactNode
  /* original navigation props - comment will be deleted after replace original nav */
  fixedTitle?: boolean
  scrollRef?: Ref<HTMLDivElement>
  scrollClassName?: string
  withScroll?: boolean
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
