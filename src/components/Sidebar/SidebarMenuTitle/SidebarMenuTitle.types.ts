/* Internal dependencies */
import { ContentComponentProps, UIComponentProps } from '../../../types/ComponentProps'

export default interface SidebarMenuTitleProps extends ContentComponentProps {
  rightAction?: React.ReactNode
  onClick?: () => void
  onClickAction?: () => void
  // TODO: (@mong) 기능 필요시 추가
  withLeftEmoji?: boolean
}

export interface StyledWrapperProps extends UIComponentProps {
  height: number
}

export interface StyledTitleWrapperProps extends UIComponentProps {}
