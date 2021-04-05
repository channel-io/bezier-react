/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { ThemeKey } from '../../foundation/Theme/ThemeType'
import { StylableComponentProps } from '../../types/ComponentProps'
import { IconName } from '../Icon'

export default interface SectionLabelProps extends StylableComponentProps {
  content?: React.ReactNode
  open?: boolean
  leftIcon?: IconName
  leftIconColor?: ThemeKey
  leftContent?: React.ReactNode
  rightIcon?: IconName
  rightIconColor?: ThemeKey
  rightContent?: React.ReactNode
  leftPadding?: number
  contentLeftPadding?: number
  onClick?: (e: React.MouseEvent) => void
  onClickRightContent?: (e: React.MouseEvent) => void
}
