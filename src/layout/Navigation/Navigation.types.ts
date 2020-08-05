/* External dependencies */
import { Ref, UIEvent } from 'react'

/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface NavigationProps extends Omit<ChildrenComponentProps, 'as'> {
  scrollClassName?: string
  scrollRef?: Ref<HTMLDivElement>
  title?: string
  fixedTitle?: boolean
  withScroll?: boolean
  width?: number
  minWidth?: number
  maxWidth?: number
  disableResize?: boolean
  onChangeWidth?: (width?: number) => void
  onScroll?: (e?: UIEvent) => void
}
