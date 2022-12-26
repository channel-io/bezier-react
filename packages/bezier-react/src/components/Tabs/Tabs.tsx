/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { TabsProps } from 'Components/Tabs/Tabs.types'
import * as Styled from './Tabs.styled'

/**
 * `Tabs` is a set of layered section of content.
 *
 * `Tabs` is a context of the Tab-related components and gives accessibility properties to Tab-related components.
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

export const Tabs = forwardRef(function Tabs({
  children,
  ...rest
}: TabsProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <Styled.Tabs ref={forwardedRef} {...rest}>
      { children }
    </Styled.Tabs>
  )
})
