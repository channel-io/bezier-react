/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  OptionItemHostProps,
  AdditionalStylableProps,
} from 'Types/ComponentProps'
import type TabsOptions from 'Components/Tabs/LegacyTabs/Tabs.types'

export default interface TabsProps extends
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  OptionItemHostProps,
  AdditionalStylableProps<'optionsWrapper'>,
  TabsOptions {}
