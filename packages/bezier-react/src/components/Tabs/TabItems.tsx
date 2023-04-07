import React, { forwardRef } from 'react'

import { type TabItemsProps } from './Tabs.types'

import * as Styled from './TabItems.styled'

/**
 * `TabItems` is a flex container which has `TabItem` flex items.
 */
export const TabItems = forwardRef(function TabItems({
  children,
}: TabItemsProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <Styled.TabItems ref={forwardedRef}>
      { children }
    </Styled.TabItems>
  )
})
