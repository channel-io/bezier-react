import React, { forwardRef } from 'react'

import { type TabActionsProps } from './Tabs.types'

import * as Styled from './TabActions.styled'

/**
 * `TabActions` is a flex container which has `TabAction` flex items.
 *  It also gives accessibility properties to its children.
 */
export const TabActions = forwardRef(function TabActions({
  children,
}: TabActionsProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <Styled.TabActions
      aria-label="More actions"
      ref={forwardedRef}
    >
      { children }
    </Styled.TabActions>
  )
})
