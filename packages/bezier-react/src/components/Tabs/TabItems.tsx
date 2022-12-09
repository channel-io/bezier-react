/* External dependencies */
import React, {
  forwardRef,
} from 'react'

/* Internal dependencies */
import * as Styled from './TabItems.styled'
import { TabItemsProps } from './Tabs.types'

export const TabItems = forwardRef(function TabItems({
  children,
}: TabItemsProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <Styled.TabItems ref={forwardedRef}>
      { children }
    </Styled.TabItems>
  )
})
