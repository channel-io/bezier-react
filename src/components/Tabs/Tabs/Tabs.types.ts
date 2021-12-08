/* Internal dependencies */
import type { ChildrenComponentProps, OptionItemHostProps } from 'Types/ComponentProps'
import TabsSize from 'Components/Tabs/TabsSize'

export default interface TabsProps extends ChildrenComponentProps, OptionItemHostProps {
  height?: TabsSize | number
  disabled?: boolean
  optionsWrapperClassName?: string
  withIndicator?: boolean
  indicatorThickness?: number
}
