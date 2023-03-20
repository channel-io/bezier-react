/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { BezierComponentProps, ContentProps } from '~/src/types/ComponentProps'

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
