/* External dependencies */
import React, { useMemo } from 'react'

/* Internal dependencies */
import { TabListProps, TabSize } from './Tabs.types'
import * as Styled from './TabList.styled'
import TabListContext from './TabListContext'

/**
 * `TabList` gives size context to its children and decides the layout of `TabItems` and `TabActions`.
 */
export function TabList({
  children,
  size = TabSize.Normal,
  ...rest
}: TabListProps) {
  const heightContextValue = useMemo(() => ({
    size,
  }), [size])

  return (
    <TabListContext.Provider value={heightContextValue}>
      <Styled.TabList
        size={size}
        {...rest}
      >
        { children }
      </Styled.TabList>
    </TabListContext.Provider>
  )
}
