/* External dependencies */
import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'

/* Internal dependencies */
import {
  TabContentProps,
} from './Tabs.types'

export function TabContent({
  children,
  value,
}: TabContentProps) {
  return (
    <Tabs.Content value={value}>
      { children }
    </Tabs.Content>
  )
}
