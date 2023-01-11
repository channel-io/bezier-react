/* External dependencies */
import React from 'react'

/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps, AdditionalStylableProps } from 'Types/ComponentProps'
import { BezierIcon, IconName } from 'Components/Icon'
import { KeyValueListItemActionProps } from './common'

interface KeyValueListItemOptions {
  keyIcon?: IconName | BezierIcon | React.ReactNode
  keyContent?: React.ReactNode
  actions?: KeyValueListItemActionProps | KeyValueListItemActionProps[]
}

export interface KeyValueListItemProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  AdditionalStylableProps<['valueWrapper', 'keyWrapper']>,
  KeyValueListItemOptions {
  onClickKey?: (e: React.MouseEvent<HTMLDivElement>) => void
  onClickValue?: (e: React.MouseEvent<HTMLDivElement>) => void
}
