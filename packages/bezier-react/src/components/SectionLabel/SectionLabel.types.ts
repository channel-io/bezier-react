/* External dependencies */
import type React from 'react'

/* Internal dependencies */
import type {
  AdditionalColorProps,
  AdditionalStylableProps,
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  SideContentProps,
} from '~/src/types/ComponentProps'

import type {
  IconName,
  IconSize,
} from '~/src/components/Icon'

interface IconInfo extends AdditionalColorProps<'icon'> {
  icon: IconName
}

interface SectionLabelHelpProps extends Partial<IconInfo> {
  iconSize?: IconSize
  tooltipContent: React.ReactNode
}

export type SectionLabelItemProps = (IconInfo & {
  onClick?: React.MouseEventHandler
}) | React.ReactElement

interface SectionLabelOptions {
  open?: boolean
  divider?: boolean
  help?: SectionLabelHelpProps
  onClick?: React.MouseEventHandler
}

export default interface SectionLabelProps extends
  BezierComponentProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>,
  ContentProps,
  ChildrenProps,
  SideContentProps<SectionLabelItemProps, SectionLabelItemProps | SectionLabelItemProps[]>,
  AdditionalStylableProps<['wrapper', 'contentWrapper', 'leftWrapper', 'rightWrapper']>,
  SectionLabelOptions {}
