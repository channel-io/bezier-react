/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { KeyValueListItemActionProps } from './common'
import type { BezierComponentProps, ChildrenProps, AdditionalStylableProps } from '~/src/types/ComponentProps'
import type { IconName } from '~/src/components/Icon'

interface KeyValueListItemOptions {
  keyIcon?: IconName | React.ReactNode
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
