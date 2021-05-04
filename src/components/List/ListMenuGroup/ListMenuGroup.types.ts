/* Internal dependencies */
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { ContentComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'
import {
  IconName,
  IconSize,
} from '../../Icon'

export enum ChevronIconType {
  Normal = 'chevron',
  Small = 'chevron-small',
}

export default interface ListMenuGroupProps extends ContentComponentProps {
  chevronClassName?: string
  chevronInterpolation?: InjectedInterpolation
  contentClassName?: string
  contentInterpolation?: InjectedInterpolation
  iconClassName?: string
  iconInterpolation?: InjectedInterpolation
  open?: boolean
  active?: boolean
  content?: React.ReactNode
  rightContent?: React.ReactNode
  hide?: boolean
  paddingLeft?: number
  disableGroupSelect?: boolean
  chevronIconType?: ChevronIconType
  chevronIconSize?: IconSize
  leftIcon?: IconName
  leftIconColor?: SemanticNames
  disableIconActive?: boolean
  name?: string
  href?: string
  onOpen?: (name?: string) => void
  onClick?: (e?: React.MouseEvent, name?: string) => void
  onClickArrow?: (name?: string) => void
  /* OptionItemHost for Sidebar Menu - nullable selectedMenuItemIndex */
  selectedMenuItemIndex?: number | null
  onChangeOption?: (name?: string, optionKey?: string, optionIndex?: number) => void
}

export interface StyledWrapperProps extends ContentComponentProps {
  open?: boolean
  rightContent?: React.ReactNode
  currentMenuItemIndex?: number | null
  chevronClassName?: string
  selectedOptionIndex?: number
  selected?: boolean
  onChangeOption?: (optionKey?: string, optionIndex?: number) => void
}

export interface StyledContentWrapperProps extends ContentComponentProps {
  open?: boolean
  currentMenuItemIndex?: number | null
}
