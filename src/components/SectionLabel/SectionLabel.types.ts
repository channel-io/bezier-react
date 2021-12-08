/* External dependencies */
import type React from 'react'

/* Internal dependencies */
import type { SemanticNames } from 'Foundation'
import type { ChildrenComponentProps } from 'Types/ComponentProps'
import type { InjectedInterpolation } from 'Types/Foundation'
import type { IconName, IconSize } from 'Components/Icon'

type SectionLabelHelpProps = {
  icon?: IconName
  iconSize?: IconSize
  iconColor?: SemanticNames
  tooltipContent: React.ReactNode
}

export type SectionLabelItemProps = {
  icon: IconName
  iconColor?: SemanticNames
  onClick?(e: React.MouseEvent): void
} | React.ReactElement

export default interface SectionLabelProps extends ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  content?: React.ReactNode
  open?: boolean
  divider?: boolean
  help?: SectionLabelHelpProps
  leftContent?: SectionLabelItemProps
  rightContent?: SectionLabelItemProps | SectionLabelItemProps[]
  wrapperClassName?: string
  wrapperInterpolation?: InjectedInterpolation
  contentWrapperClassName?: string
  contentWrapperInterpolation?: InjectedInterpolation
  leftWrapperClassName?: string
  leftWrapperInterpolation?: InjectedInterpolation
  rightWrapperClassName?: string
  rightWrapperInterpolation?: InjectedInterpolation
  onClick?: (e: React.MouseEvent) => void
}
