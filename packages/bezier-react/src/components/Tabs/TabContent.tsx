/* External dependencies */
import React, { forwardRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

/* Internal dependencies */
import { type TabContentProps } from './Tabs.types'

/**
 * `TabContent` has content associated with `TabItem`.
 */
export const TabContent = forwardRef(function TabContent({
  children,
  value,
  ...rest
}: TabContentProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <Tabs.Content
      value={value}
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </Tabs.Content>
  )
})
