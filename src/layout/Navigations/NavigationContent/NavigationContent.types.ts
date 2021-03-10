/* Internal dependencies */
import { UIComponentProps } from '../../../types/ComponentProps'
import { ColumnState } from '../../redux/LayoutActions'

export default interface NavigationContentProps extends UIComponentProps {
  header?: React.ReactElement | null
  fixedHeader?: boolean
  stickyFooter?: React.ReactElement | null
  scrollRef?: React.Ref<HTMLDivElement>
  scrollClassName?: string
  withScroll?: boolean
  onScroll?: () => void
  onChangeWidth?: (width: number) => void

  /* LayoutState Prop */
  layoutOption: ColumnState
  showNavigation?: boolean
}
