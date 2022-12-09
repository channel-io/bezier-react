/* External dependencies */
import { createContext } from 'react'

/* Internal dependencies */
import { TabsListContextValue, TabSize } from './Tabs.types'

const TabListContext = createContext<TabsListContextValue>({
  size: TabSize.Normal,
})

export default TabListContext
