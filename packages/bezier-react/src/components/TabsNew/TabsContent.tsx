/* External dependencies */
import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'

/* Internal dependencies */
import {
  TabContentProps,
} from './Tabs.types'

export function TabsContent({
  children,
  value,
}: TabContentProps) {
  return (
    <Tabs.Content
      value={value}
    >
      { children }
    </Tabs.Content>
  )
}
