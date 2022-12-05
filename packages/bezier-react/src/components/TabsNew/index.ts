import { Tabs } from './Tabs'
import TabAction from './TabAction'
import TabItem from './TabItem'
import { TabsList } from './TabsList'
import { TabsSize } from './Tabs.types'
import type {
  TabsProps,
  TabItemProps,
  TabsListProps,
  TabActionProps,
} from './Tabs.types'

export { TabsContent } from './TabsContent'

// TODO: Legacy Tab component 삭제 후 New suffix 삭제
export {
  Tabs as TabsNew,
  TabAction as TabActionNew,
  TabItem as TabItemNew,
  TabsList as TabsListNew,
  TabsSize as TabsNewSize,
  TabsProps as TabsNewProps,
  TabItemProps as TabItemNewProps,
  TabsListProps as TabsListNewProps,
  TabActionProps as TabActionNewProps,
}
