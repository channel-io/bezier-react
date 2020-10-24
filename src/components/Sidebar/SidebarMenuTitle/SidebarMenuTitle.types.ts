/* Internal dependencies */
import { ContentComponentProps, UIComponentProps } from '../../../types/ComponentProps'

export default interface SidebarMenuTitleProps extends ContentComponentProps {
  rightAction?: React.ReactNode
  onClick?: () => void
  onClickAction?: () => void
  withLeftEmoji?: boolean
}

export interface StyledWrapperProps extends UIComponentProps {
  height: number
}

export interface StyledTitleWrapperProps extends UIComponentProps {}
