/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'
import OptionItemHost from '../../types/OptionItemHost'

export enum TabsSize {
  L = 53,
  Normal = 45,
  XS = 33,
}

export default interface TabsProps extends ChildrenComponentProps, OptionItemHost {
  height?: TabsSize | number
  disabled?: boolean
  optionsWrapperClassName?: string
  withIndicator?: boolean
  indicatorThickness?: number
}
