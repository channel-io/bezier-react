/* Internal dependencies */
import { ChildrenComponentProps, ContentComponentProps } from 'Types/ComponentProps'

export default interface MainProps extends ChildrenComponentProps, ContentComponentProps {
  ContentHeaderComponent: React.ComponentType
  CoverableHeaderComponent?: React.ComponentType
  SidePanelComponent: React.ComponentType
  SideViewComponent: React.ComponentType
  onChangeSideWidth?: (width: number) => void
  onFocusContentArea?: (e: React.FocusEvent<HTMLDivElement>) => void
  onBlurContentArea?: (e: React.FocusEvent<HTMLDivElement>) => void
}
