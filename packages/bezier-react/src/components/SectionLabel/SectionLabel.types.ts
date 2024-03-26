import type React from 'react'

import { type BezierIcon, type IconName } from '@channel.io/bezier-icons'

import type {
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  SideContentProps,
} from '~/src/types/props'

type Icon = IconName | BezierIcon

export type IconWithAction = {
  icon: Icon
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export type SectionLabelLeftContent = Icon | React.ReactNode

export type SectionLabelRightContent = Icon | React.ReactNode | IconWithAction

interface SectionLabelOwnProps {
  open?: boolean
  help?: React.ReactNode
}

export interface SectionLabelProps
  extends Omit<BezierComponentProps, keyof ContentProps>,
    ContentProps,
    ChildrenProps,
    SideContentProps<
      SectionLabelLeftContent,
      SectionLabelRightContent | SectionLabelRightContent[]
    >,
    SectionLabelOwnProps {}
