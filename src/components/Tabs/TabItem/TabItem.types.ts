/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { ChildrenComponentProps, BezierComponentProps, OptionItemProps, ActivatableProps } from 'Types/ComponentProps'
import TabsSize from 'Components/Tabs/TabsSize'

export default interface TabItemProps extends ChildrenComponentProps, OptionItemProps, ActivatableProps {
  height?: TabsSize | number
  withIndicator?: boolean
  indicatorThickness?: number
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export interface StyledWrapperProps extends BezierComponentProps, OptionItemProps, ActivatableProps {
  withIndicator?: boolean
  indicatorThickness?: number
}
