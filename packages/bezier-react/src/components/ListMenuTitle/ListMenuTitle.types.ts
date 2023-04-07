import type React from 'react'

import {
  type BezierComponentProps,
  type ContentProps,
} from '~/src/types/ComponentProps'

interface ListMenuTitleOptions {
  rightAction?: React.ReactNode
  hide?: boolean
  onClick?: React.MouseEventHandler
  onClickAction?: () => void
}

export default interface ListMenuTitleProps extends
  BezierComponentProps,
  ContentProps,
  ListMenuTitleOptions {}

export interface StyledWrapperProps extends BezierComponentProps {}

export interface StyledTitleWrapperProps extends BezierComponentProps {}
