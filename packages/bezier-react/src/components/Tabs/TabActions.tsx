/* External dependencies */
import React, {
  forwardRef,
} from 'react'

/* Internal dependencies */
import * as Styled from './TabActions.styled'
import { TabActionsProps } from './Tabs.types'

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
