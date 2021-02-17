/* Internal dependencies */
import { ContentComponentProps, UIComponentProps } from '../../../types/ComponentProps'

export default interface ListMenuTitleProps extends ContentComponentProps {
  rightAction?: React.ReactNode
  hide?: boolean
  onClick?: () => void
  onClickAction?: () => void
}

export interface StyledWrapperProps extends UIComponentProps {}

export interface StyledTitleWrapperProps extends UIComponentProps {}
