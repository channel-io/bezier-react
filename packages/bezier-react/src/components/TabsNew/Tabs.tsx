/* External dependencies */
import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { TabsProps } from 'Components/TabsNew/Tabs.types'
import * as Styled from './Tabs.styled'

/**
 * `Tabs` is a set of layered section of content
 *
 * `Tabs` is a context of the Tabs-related components.
 * It does not render any DOM node, but it provides handlers and accessibility property to
 * its Tabs-related children components.
 *
 * @example
 *
 * ```tsx
 * <Tabs>
 *  <TabList>
 *    <TabItem />
 *    <TabAction />
 *  </TabList>
 *  <TabContent />
 * </Tabs>
 * ```
 */

export function Tabs({
  children,
  defaultValue,
  value,
  onValueChange = noop,
}: TabsProps) {
  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      asChild
    >
      <Styled.Tabs>
        { children }
      </Styled.Tabs>
    </TabsPrimitive.Root>
  )
}

