/* External dependencies */
import { createContext } from 'react'

/* Internal dependencies */
import {
  type TabListContextValue,
  TabSize,
} from './Tabs.types'

const TabListContext = createContext<TabListContextValue>({
  size: TabSize.M,
})

export default TabListContext
