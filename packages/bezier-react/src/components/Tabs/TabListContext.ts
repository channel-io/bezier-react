import { createContext } from '~/src/utils/reactUtils'

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
