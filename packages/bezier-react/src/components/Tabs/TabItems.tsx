/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import * as Styled from './TabItems.styled'
import { type TabItemsProps } from './Tabs.types'

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
