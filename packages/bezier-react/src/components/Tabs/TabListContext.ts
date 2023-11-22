import { createContext } from '~/src/utils/react'

import {
  type TabListContextValue,
  TabSize,
} from './Tabs.types'

export const [
  TabListContextProvider,
  useTabListContext,
] = createContext<TabListContextValue>({
  size: TabSize.M,
})
