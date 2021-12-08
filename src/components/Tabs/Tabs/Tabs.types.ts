/* Internal dependencies */
import { ChildrenComponentProps } from 'Types/ComponentProps'
import OptionItemHost from 'Types/OptionItemHost'
import TabsSize from 'Components/Tabs/TabsSize'

export default interface TabsProps extends ChildrenComponentProps, OptionItemHost {
  height?: TabsSize | number
  disabled?: boolean
  optionsWrapperClassName?: string
  withIndicator?: boolean
  indicatorThickness?: number
}
