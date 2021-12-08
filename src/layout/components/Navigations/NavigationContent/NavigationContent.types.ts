/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import { ColumnState } from 'Layout/redux/LayoutActions'

interface NavigationContentOptions {
  header?: React.ReactElement | null
  fixedHeader?: boolean
  stickyFooter?: React.ReactElement | null
  scrollRef?: React.Ref<HTMLDivElement>
  scrollClassName?: string
  withScroll?: boolean
  onScroll?: React.UIEventHandler
  onChangeWidth?: (width: number) => void

  /* LayoutState Prop */
  navigationKey: string
  layoutOption: ColumnState
}

export default interface NavigationContentProps extends
  BezierComponentProps,
  ChildrenProps,
  NavigationContentOptions {}
