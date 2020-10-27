/* Internal dependencies */
import ActivableElement from '../../../types/ActivatableElement'
import { ContentComponentProps, UIComponentProps } from '../../../types/ComponentProps'
import OptionItem from '../../../types/OptionItem'

export default interface ListItemProps extends ContentComponentProps, OptionItem, ActivableElement {
  name?: string
  href?: string
  hide?: boolean
  onClick?: (e: any, name?: string) => void
}

export interface StyledWrapperProps extends UIComponentProps, OptionItem, ActivableElement {}
