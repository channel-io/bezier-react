/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { ThemeKey } from '../../foundation/Theme/ThemeType'
import { ChildrenComponentProps } from '../../types/ComponentProps'
import { IconName, IconSize } from '../Icon'

export type SectionLabelHelpProps = {
  icon?: IconName
  iconSize?: IconSize
  iconColor?: ThemeKey
  tooltipContent: string
}

export type SectionLabelItemProps = {
  icon: IconName
  iconColor?: ThemeKey
} | {
  content: React.ReactNode
}

export default interface SectionLabelProps extends ChildrenComponentProps {
  content?: React.ReactNode
  open?: boolean
  divider?: boolean
  help?: SectionLabelHelpProps
  left?: SectionLabelItemProps
  right?: SectionLabelItemProps | SectionLabelItemProps[]
  onClick?: (e: React.MouseEvent) => void
}
