/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { BezierComponentProps, DisableProps, LinkProps } from 'Types/ComponentProps'
import type TabsOptions from 'Components/Tabs/Tabs.types'

interface TabActionOptions {
  children: React.ReactNode | ((args: { disabled: boolean }) => React.ReactNode)
  onClick?: React.MouseEventHandler
}

export default interface TabActionProps extends
  BezierComponentProps,
  LinkProps,
  DisableProps,
  Pick<TabsOptions, 'height'>,
  TabActionOptions {}
