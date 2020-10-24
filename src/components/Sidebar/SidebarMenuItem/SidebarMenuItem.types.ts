/* Internal dependencies */

import ActivableElement from '../../../types/ActivatableElement'
import { ContentComponentProps, UIComponentProps } from '../../../types/ComponentProps'
import OptionItem from '../../../types/OptionItem'

export default interface SidebarMenuItemProps extends ContentComponentProps, OptionItem, ActivableElement {
  href?: string
}

export interface StyledWrapperProps extends UIComponentProps, OptionItem, ActivableElement {}
