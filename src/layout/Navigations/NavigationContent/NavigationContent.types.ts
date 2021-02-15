/* Internal dependencies */
import { UIComponentProps } from '../../../types/ComponentProps'
import { ColumnState } from '../../Client/utils/LayoutReducer'

export default interface NavigationContentProps extends UIComponentProps {
  header?: React.ReactElement | null
  fixedHeader?: boolean
  stickyFooter?: React.ReactElement | null

  scrollRef?: React.Ref<HTMLDivElement>
  scrollClassName?: string
  withScroll?: boolean
  onScroll?: () => void

  /* LayoutState Prop */
  layoutOption: ColumnState
  showNavigation?: boolean

  /* cloneElement Props */
  optionIndex?: number
  onMouseDown?: (
    event: HTMLElementEventMap['mousedown'],
    optionIndex: number,
  ) => void
  onMouseUp?: () => void
  onMouseMove?: (event: HTMLElementEventMap['mousemove']) => void
}
