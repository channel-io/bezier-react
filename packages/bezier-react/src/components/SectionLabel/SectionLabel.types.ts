import type React from 'react'

import {
  type BezierIcon,
  type IconName,
} from '@channel.io/bezier-icons'

import type {
  AlphaBezierComponentProps,
  ChildrenProps,
  ContentProps,
  SideContentProps,
} from '~/src/types/ComponentProps'

type Icon = IconName | BezierIcon

export type IconWithAction = {
  icon: Icon
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export type SectionLabelLeftContent = Icon | React.ReactNode

export type SectionLabelRightContent = Icon | React.ReactNode | IconWithAction

interface SectionLabelOwnProps {
  open?: boolean
  divider?: boolean
  help?: React.ReactNode
}

export interface SectionLabelProps extends
  AlphaBezierComponentProps,
  ContentProps,
  ChildrenProps,
  SideContentProps<SectionLabelLeftContent, SectionLabelRightContent | SectionLabelRightContent[]>,
  Omit<React.HTMLAttributes<HTMLElement>, 'content'>,
  SectionLabelOwnProps {}
