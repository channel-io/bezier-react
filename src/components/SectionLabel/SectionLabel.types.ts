/* External dependencies */
import React from 'react'

/* Internal dependencies */
import type { css } from '../../foundation'
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
  onClick?(e: React.MouseEvent): void
} | {
  content: React.ReactElement
}

type InjectedInterpolation = ReturnType<typeof css>

export default interface SectionLabelProps extends ChildrenComponentProps {
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
