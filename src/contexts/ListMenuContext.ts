/* External dependencies */
import React, { createContext } from 'react'
import { noop } from 'lodash-es'

export interface ListMenuContextProps {
  depth: number
  paddingLeft: number
  active: boolean
  onClick: (event?: React.MouseEvent<HTMLDivElement>, name?: string) => void
}

export const defaultListMenuContext = {
  depth: 0,
  paddingLeft: 0,
  active: false,
  onClick: noop,
}

export function mergeListMenuContexts(
  inherited: ListMenuContextProps,
  props: Partial<Omit<ListMenuContextProps, 'depth'>>,
  indent: number,
): ListMenuContextProps {
  return {
    depth: inherited.depth + 1,
    paddingLeft: inherited.paddingLeft + (props.paddingLeft ?? 0) + (inherited.depth > 0 ? indent : 0),
    active: props.active ?? inherited.active,
    onClick: (event?: React.MouseEvent<HTMLDivElement>, name?: string) => {
      inherited.onClick(event, name)
      props.onClick?.(event, name)
    },
  }
}

export const ListMenuContext = createContext<ListMenuContextProps>(defaultListMenuContext)
