import type React from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import type { BezierComponentProps, ChildrenProps } from '~/src/types/props'

export type ItemActionWithIcon = {
  icon: BezierIcon
  tooltip?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type KeyValueItemAction = ItemActionWithIcon | React.ReactElement

interface KeyValueItemOwnProps {
  keyIcon?: BezierIcon | React.ReactNode
  keyContent?: React.ReactNode
  actions?: KeyValueItemAction | KeyValueItemAction[]
  onClickKey?: React.MouseEventHandler<HTMLDivElement>
  onClickValue?: React.MouseEventHandler<HTMLDivElement>
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface KeyValueItemProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    KeyValueItemOwnProps {}
