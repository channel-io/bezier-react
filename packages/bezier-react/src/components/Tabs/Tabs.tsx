/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { TabsProps } from 'Components/Tabs/Tabs.types'
import * as Styled from './Tabs.styled'

/**
 * `Tabs` is a set of layered section of content
 *
 * @example
 *
 * ```tsx
 * <Tabs>
 *  <TabList>
 *    <TabItems>
 *      <TabItem />
 *    <TabItems />
 *    <TabActions>
 *      <TabAction />
 *    </TabActions>
 *  </TabList>
 *  <TabContent />
 * </Tabs>
 * ```
 */

export function Tabs({
  children,
  ...rest
}: TabsProps) {
  return (
    <Styled.Tabs {...rest}>
      { children }
    </Styled.Tabs>
  )
}

