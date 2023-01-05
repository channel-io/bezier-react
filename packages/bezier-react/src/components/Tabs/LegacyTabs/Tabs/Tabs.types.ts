/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  OptionItemHostProps,
  AdditionalStylableProps,
} from '~/src/types/ComponentProps'
import type TabsOptions from '~/src/components/Tabs/LegacyTabs/Tabs.types'

export default interface TabsProps extends
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  OptionItemHostProps,
  AdditionalStylableProps<'optionsWrapper'>,
  TabsOptions {}
