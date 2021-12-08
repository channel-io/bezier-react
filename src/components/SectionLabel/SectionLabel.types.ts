/* External dependencies */
import type React from 'react'

/* Internal dependencies */
import type { SemanticNames } from 'Foundation'
import type {
  BezierComponentProps,
  ContentProps,
  ChildrenProps,
  SideContentProps,
  AdditionalStylableProps,
} from 'Types/ComponentProps'
import type { IconName, IconSize } from 'Components/Icon'

interface IconInfo {
  icon: IconName
  iconColor?: SemanticNames
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
