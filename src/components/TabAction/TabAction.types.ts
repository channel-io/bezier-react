/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { BezierComponentProps } from '../../types/ComponentProps'
import { TabsSize } from '../Tabs/Tabs.types'

export default interface TabActionProps extends Omit<BezierComponentProps, 'children'> {
  href?: string
  height?: TabsSize | number
  onClick?: () => void
  children: React.ReactNode | ((args: { disabled: boolean }) => React.ReactNode)
  disabled?: boolean
}
