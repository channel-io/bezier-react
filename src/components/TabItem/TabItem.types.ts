/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { ChildrenComponentProps, UIComponentProps } from 'Types/ComponentProps'
import OptionItem from 'Types/OptionItem'
import ActivatableElement from 'Types/ActivatableElement'
import { TabsSize } from 'Components/Tabs'

export default interface TabItemProps extends ChildrenComponentProps, OptionItem, ActivatableElement {
  height?: TabsSize | number
  withIndicator?: boolean
  indicatorThickness?: number
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export interface StyledWrapperProps extends UIComponentProps, OptionItem, ActivatableElement {
  withIndicator?: boolean
  indicatorThickness?: number
}
