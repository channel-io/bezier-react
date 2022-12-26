/* External dependencies */
import { createContext } from 'react'

/* Internal dependencies */
import { TabListContextValue, TabSize } from './Tabs.types'

const TabListContext = createContext<TabListContextValue>({
  size: TabSize.Normal,
})

export default TabListContext
