/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface TabActionsProps extends Omit<UIComponentProps, 'children'> {
  children: Array<React.ReactNode | ((args: { disabled: boolean }) => React.ReactNode)>
}

export interface StyledWrapperProps extends UIComponentProps {}
