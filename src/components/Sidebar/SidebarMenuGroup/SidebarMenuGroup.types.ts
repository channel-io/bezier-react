/* Internal dependencies */
import { ContentComponentProps } from '../../../types/ComponentProps'
import OptionItemHost from '../../../types/OptionItemHost'
import { IconName } from '../../Icon'

export default interface SidebarMenuGroupProps extends ContentComponentProps, OptionItemHost {
  open?: boolean
  content?: React.ReactNode
  leftIcon?: IconName
  rightContent?: React.ReactNode
  arrowClassName?: string
}

export interface StyledWrapperProps extends ContentComponentProps, OptionItemHost {
  open?: boolean
  content?: React.ReactNode
  rightContent?: React.ReactNode
  currentMenuItemIndex?: number | null
  arrowClassName?: string
}
