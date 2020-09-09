/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import OptionItem from '../../types/OptionItem'
import ActivatableElement from '../../types/ActivatableElement'

export default interface TabItemProps extends UIComponentProps, OptionItem, ActivatableElement {
  useIndicator?: boolean
  indicatorThickness?: number
}

export interface StyledWrapperProps extends UIComponentProps, OptionItem, ActivatableElement {
  useIndicator?: boolean
  indicatorThickness?: number
}
