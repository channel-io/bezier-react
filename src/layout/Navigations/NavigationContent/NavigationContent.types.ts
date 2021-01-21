/* Internal dependencies */
import { UIComponentProps } from '../../../types/ComponentProps'
import { NavigationState } from '../../Client/utils/LayoutReducer'

export default interface NavigationContentProps extends UIComponentProps {
  header?: React.ReactElement | null
  fixedHeader?: boolean
  stickyFooter?: React.ReactElement | null

  scrollRef?: React.Ref<HTMLDivElement>
  scrollClassName?: string
  withScroll?: boolean
  onScroll?: () => void
  onChangeWidth?: (width: number) => any

  /* LayoutState Prop */
  layoutOption: NavigationState
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
