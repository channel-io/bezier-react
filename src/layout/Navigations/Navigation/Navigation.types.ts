/* Internal dependencies */
import { Ref } from 'react'
import { ChildrenComponentProps } from '../../../types/ComponentProps'

export default interface NavigationProps extends Omit<ChildrenComponentProps, 'as'> {
  header?: React.ReactElement
  stickyFooter?: React.ReactElement | null
  hidable?: boolean

  /* original navigation props - comment will be deleted after replace original nav */
  disableResize?: boolean
  fixedHeader?: boolean
  scrollRef?: Ref<HTMLDivElement>
  scrollClassName?: string
  withScroll?: boolean
  onScroll?: () => void

  /* cloneElement Props */
  optionIndex?: number
  onMouseDown?: (
    event: HTMLElementEventMap['mousedown'],
    optionIndex: number,
  ) => void
  onMouseUp?: () => void
  onMouseMove?: (event: HTMLElementEventMap['mousemove']) => void
}
