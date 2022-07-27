/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, ContentProps } from 'Types/ComponentProps'

type FocusEventHandler = React.FocusEventHandler<HTMLDivElement>

interface MainOptions {
  ContentHeaderComponent: React.ComponentType
  CoverableHeaderComponent?: React.ComponentType
  SidePanelComponent?: React.ComponentType
  SideViewComponent?: React.ComponentType
  onChangeSideWidth?: (width: number) => void
  onFocusContentArea?: FocusEventHandler
  onBlurContentArea?: FocusEventHandler
}

export default interface MainProps extends
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  MainOptions {}
