/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import OptionItem from '../../types/OptionItem'
import ActivatableElement from '../../types/ActivatableElement'
import { TabsSize } from '../Tabs/Tabs.types'

export default interface TabItemProps extends UIComponentProps, OptionItem, ActivatableElement {
  height?: TabsSize | number
  withIndicator?: boolean
  indicatorThickness?: number
}

export interface StyledWrapperProps extends UIComponentProps, OptionItem, ActivatableElement {
  withIndicator?: boolean
  indicatorThickness?: number
}
