/* Internal dependencies */
import ActivableElement from '../../../types/ActivatableElement'
import { ContentComponentProps, UIComponentProps } from '../../../types/ComponentProps'
import OptionItem from '../../../types/OptionItem'

export default interface ListItemProps extends ContentComponentProps, OptionItem, ActivableElement {
  href?: string
  hide?: boolean
}

export interface StyledWrapperProps extends UIComponentProps, OptionItem, ActivableElement {}
