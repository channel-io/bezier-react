import type React from 'react'

import { noop } from '~/src/utils/function'
import { createContext } from '~/src/utils/react'

interface OutlineItemContextProps {
  depth: number
  paddingLeft: number
  active: boolean
  onClick: (event?: React.MouseEvent<Element>, name?: string) => void
}

const defaultOutlineItemContext = {
  depth: 0,
  paddingLeft: 0,
  active: false,
  onClick: noop,
}

function mergeOutlineItemContexts(
  inherited: OutlineItemContextProps,
  props: Partial<Omit<OutlineItemContextProps, 'depth'>>,
  indent: number,
): OutlineItemContextProps {
  return {
    depth: inherited.depth + 1,
    paddingLeft: inherited.paddingLeft + (props.paddingLeft ?? 0) + (inherited.depth > 0 ? indent : 0),
    active: props.active ?? inherited.active,
    onClick: (event?: React.MouseEvent<Element>, name?: string) => {
      inherited.onClick(event, name)
      props.onClick?.(event, name)
    },
  }
}

const [
  OutlineItemContextProvider,
  useOutlineItemContextBase,
] = createContext<OutlineItemContextProps>(defaultOutlineItemContext)

export { OutlineItemContextProvider }

export const useOutlineItemContext = (props: Partial<Omit<OutlineItemContextProps, 'depth'>>, indent: number) => {
  const inheritedContext = useOutlineItemContextBase() ?? defaultOutlineItemContext
  const context = mergeOutlineItemContexts(inheritedContext, props, indent)
  return context
}
