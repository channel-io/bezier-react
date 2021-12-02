/* External dependencies */
import React from 'react'

/* Internal dependencies */
import {
  ChildrenComponentProps,
  BezierComponentProps,
} from '../../types/ComponentProps'
import OptionItem from '../../types/OptionItem'
import ActivatableElement from '../../types/ActivatableElement'
import { TabsSize } from '../Tabs/Tabs.types'

export default interface TabItemProps extends ChildrenComponentProps, OptionItem, ActivatableElement {
  height?: TabsSize | number
  withIndicator?: boolean
  indicatorThickness?: number
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export interface StyledWrapperProps extends BezierComponentProps, OptionItem, ActivatableElement {
  withIndicator?: boolean
  indicatorThickness?: number
}
