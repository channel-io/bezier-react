/* External dependencies */
import type React from 'react'

/* Internal dependencies */
import type { SemanticNames } from '../../foundation/Colors/Theme'
import type { ChildrenComponentProps } from '../../types/ComponentProps'
import type InjectedInterpolation from '../../types/InjectedInterpolation'
import type { IconName, IconSize } from '../Icon'

export type SectionLabelHelpProps = {
  icon?: IconName
  iconSize?: IconSize
  iconColor?: SemanticNames
  tooltipContent: string
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
