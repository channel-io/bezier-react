/* External dependencies */
import React, { forwardRef, useMemo } from 'react'

/* Internal dependencies */
import { TabListProps, TabSize } from './Tabs.types'
import * as Styled from './TabList.styled'
import TabListContext from './TabListContext'

/**
 * `TabList` gives size context to its children and decides the layout of `TabItems` and `TabActions`.
 */
export const TabList = forwardRef(function TabList({
  children,
  size = TabSize.M,
  ...rest
}: TabListProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const heightContextValue = useMemo(() => ({
    size,
  }), [size])

  return (
    <TabListContext.Provider value={heightContextValue}>
      <Styled.TabList
        size={size}
        ref={forwardedRef}
        {...rest}
      >
        { children }
      </Styled.TabList>
    </TabListContext.Provider>
  )
})
