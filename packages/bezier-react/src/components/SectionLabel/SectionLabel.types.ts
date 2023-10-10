import type React from 'react'

import {
  type BezierIcon,
  type IconName,
} from '@channel.io/bezier-icons'

import type {
  AdditionalColorProps,
  AdditionalStylableProps,
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  SideContentProps,
} from '~/src/types/ComponentProps'

interface IconInfo extends AdditionalColorProps<'icon'> {
  icon: IconName | BezierIcon
}

export type SectionLabelItemProps = (IconInfo & {
  onClick?: React.MouseEventHandler
}) | React.ReactElement

interface SectionLabelOptions {
  open?: boolean
  divider?: boolean
  help?: React.ReactNode
  onClick?: React.MouseEventHandler
}

export default interface SectionLabelProps extends
  BezierComponentProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | keyof ContentProps>,
  ContentProps,
  ChildrenProps,
  SideContentProps<SectionLabelItemProps, SectionLabelItemProps | SectionLabelItemProps[]>,
  AdditionalStylableProps<['wrapper', 'contentWrapper', 'leftWrapper', 'rightWrapper']>,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'content' | 'onClick'>,
  SectionLabelOptions {}
