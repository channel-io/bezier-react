/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { BezierComponentProps, DisableProps, ChildrenProps, OptionItemProps, ActivatableProps } from '~/src/types/ComponentProps'
import type TabsOptions from '~/src/components/Tabs/LegacyTabs/Tabs.types'

type TabItemBaseProps = BezierComponentProps & OptionItemProps & ActivatableProps

interface TabItemOptions {
  onClick?: React.MouseEventHandler
}

export default interface TabItemProps extends
  TabItemBaseProps,
  ChildrenProps,
  DisableProps,
  TabsOptions,
  TabItemOptions {}

export interface StyledWrapperProps extends
  TabItemBaseProps,
  Omit<TabsOptions, 'height'> {}
