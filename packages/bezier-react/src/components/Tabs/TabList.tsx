import React, {
  forwardRef,
  useMemo,
} from 'react'

import {
  cssVarName,
  px,
} from '~/src/utils/style'

import { TabListContextProvider } from './TabListContext'
import {
  type TabListProps,
  TabSize,
} from './Tabs.types'

import * as Styled from './TabList.styled'

const cv = cssVarName('tabs')

const heightBy = (size: TabSize) => {
  switch (size) {
    case TabSize.L:
      return 53
    case TabSize.M:
      return 45
    case TabSize.S:
    default:
      return 33
  }
}

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
    <TabListContextProvider value={heightContextValue}>
      <Styled.TabList
        size={size}
        ref={forwardedRef}
        style={{
          [cv('size')]: px(heightBy(size)),
        } as React.CSSProperties}
        {...rest}
      >
        { children }
      </Styled.TabList>
    </TabListContextProvider>
  )
})
