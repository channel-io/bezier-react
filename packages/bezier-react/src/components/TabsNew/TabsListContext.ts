/* External dependencies */
import { createContext } from 'react'

/* Internal dependencies */
import { TabsListContextValue, TabsSize } from './Tabs.types'

const TabsListContext = createContext<TabsListContextValue>({
  height: TabsSize.Normal,
})

export default TabsListContext
