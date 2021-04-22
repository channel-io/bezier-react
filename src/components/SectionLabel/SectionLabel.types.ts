/* External dependencies */
import type React from 'react'

/* Internal dependencies */
import type { ThemeKey } from '../../foundation/Theme/ThemeType'
import type { ChildrenComponentProps } from '../../types/ComponentProps'
import type InjectedInterpolation from '../../types/InjectedInterpolation'
import type { IconName, IconSize } from '../Icon'

export type SectionLabelHelpProps = {
  icon?: IconName
  iconSize?: IconSize
  iconColor?: ThemeKey
  tooltipContent: string
}

export type SectionLabelItemProps = {
  icon: IconName
  iconColor?: ThemeKey
  onClick?(e: React.MouseEvent): void
} | {
  content: React.ReactElement
}

export default interface SectionLabelProps extends ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  content?: React.ReactNode
  open?: boolean
  divider?: boolean
  help?: SectionLabelHelpProps
  left?: SectionLabelItemProps
  right?: SectionLabelItemProps | SectionLabelItemProps[]
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
