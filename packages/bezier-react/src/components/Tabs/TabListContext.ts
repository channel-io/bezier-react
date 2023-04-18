import { createContext } from 'react'

import {
  type TabListContextValue,
  TabSize,
} from './Tabs.types'

const TabListContext = createContext<TabListContextValue>({
  size: TabSize.M,
})

export default TabListContext
