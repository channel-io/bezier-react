/* External dependencies */
import { useContext } from 'react'

/* Internal dependencies */
import {
  defaultListMenuContext,
  ListMenuContext,
  mergeListMenuContexts,
} from '../contexts/ListMenuContext'
import type { ListMenuContextProps } from '../contexts/ListMenuContext'

const useListMenuContext = (props: Partial<Omit<ListMenuContextProps, 'depth'>>, indent: number) => {
  const inheritedContext = useContext(ListMenuContext) ?? defaultListMenuContext
  const context = mergeListMenuContexts(inheritedContext, props, indent)
  return context
}

export default useListMenuContext
