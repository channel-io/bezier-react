/* External dependencies */
import React, { createContext } from 'react'
import { noop } from 'lodash-es'

export interface OutlineItemContextProps {
  depth: number
  paddingLeft: number
  active: boolean
  onClick: (event?: React.MouseEvent<Element>, name?: string) => void
}

export const defaultOutlineItemContext = {
  depth: 0,
  paddingLeft: 0,
  active: false,
  onClick: noop,
}

export function mergeOutlineItemContexts(
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

export const OutlineItemContext = createContext<OutlineItemContextProps>(defaultOutlineItemContext)
