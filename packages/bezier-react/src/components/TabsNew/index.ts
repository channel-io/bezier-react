import { Tabs } from './Tabs'
import TabAction from './TabAction'
import TabItem from './TabItem'
import { TabList } from './TabList'
import { TabSize } from './Tabs.types'
import type {
  TabsProps,
  TabItemProps,
  TabListProps,
  TabActionProps,
} from './Tabs.types'

export { TabContent as TabsContent } from './TabContent'

// TODO: Legacy Tab component 삭제 후 New suffix 삭제
export {
  Tabs as TabsNew,
  TabAction as TabActionNew,
  TabItem as TabItemNew,
  TabList as TabsListNew,
  TabSize as TabsNewSize,
  TabsProps as TabsNewProps,
  TabItemProps as TabItemNewProps,
  TabListProps as TabsListNewProps,
  TabActionProps as TabActionNewProps,
}
