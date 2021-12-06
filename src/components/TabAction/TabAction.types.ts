/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { UIComponentProps } from 'Types/ComponentProps'
import { TabsSize } from 'Components/Tabs'

export default interface TabActionProps extends Omit<UIComponentProps, 'children'> {
  href?: string
  height?: TabsSize | number
  onClick?: React.MouseEventHandler
  children: React.ReactNode | ((args: { disabled: boolean }) => React.ReactNode)
  disabled?: boolean
}
