/* External dependencies */
import { useContext } from 'react'

/* Internal dependencies */
import {
  defaultOutlineItemContext,
  OutlineItemContext,
  mergeOutlineItemContexts,
} from '../contexts/OutlineItemContext'
import type { OutlineItemContextProps } from '../contexts/OutlineItemContext'

const useOutlineItemContext = (props: Partial<Omit<OutlineItemContextProps, 'depth'>>, indent: number) => {
  const inheritedContext = useContext(OutlineItemContext) ?? defaultOutlineItemContext
  const context = mergeOutlineItemContexts(inheritedContext, props, indent)
  return context
}

export default useOutlineItemContext
