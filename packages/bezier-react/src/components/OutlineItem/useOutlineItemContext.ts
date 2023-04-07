import { useContext } from 'react'

import {
  defaultOutlineItemContext,
  mergeOutlineItemContexts,
  OutlineItemContext,
} from './OutlineItemContext'
import type { OutlineItemContextProps } from './OutlineItemContext'

const useOutlineItemContext = (props: Partial<Omit<OutlineItemContextProps, 'depth'>>, indent: number) => {
  const inheritedContext = useContext(OutlineItemContext) ?? defaultOutlineItemContext
  const context = mergeOutlineItemContexts(inheritedContext, props, indent)
  return context
}

export default useOutlineItemContext
