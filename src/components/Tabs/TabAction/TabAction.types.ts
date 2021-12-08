/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { BezierComponentProps } from 'Types/ComponentProps'
import TabsSize from 'Components/Tabs/TabsSize'

export default interface TabActionProps extends Omit<BezierComponentProps, 'children'> {
  href?: string
  height?: TabsSize | number
  onClick?: React.MouseEventHandler
  children: React.ReactNode | ((args: { disabled: boolean }) => React.ReactNode)
  disabled?: boolean
}
