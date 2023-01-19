/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { BezierComponentProps, DisableProps, LinkProps, ChildrenProps } from '~/src/types/ComponentProps'
import type TabsOptions from '~/src/components/Tabs/LegacyTabs/Tabs.types'

interface TabActionOptions extends ChildrenProps {
  onClick?: React.MouseEventHandler
}

export default interface TabActionProps extends
  BezierComponentProps,
  LinkProps,
  DisableProps,
  Pick<TabsOptions, 'height'>,
  TabActionOptions {}
