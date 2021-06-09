/* Internal dependencies */
import { SemanticNames } from '../../foundation/Colors/Theme'
import {
  ChildrenComponentProps,
  ContentComponentProps,
} from '../../types/ComponentProps'
import InjectedInterpolation from '../../types/InjectedInterpolation'
import OptionItem from '../../types/OptionItem'
import {
  IconName,
  IconSize,
} from '../Icon'

export enum ChevronIconType {
  Normal = 'chevron',
  Small = 'chevron-small',
}

export default interface OutlineItemProps extends ContentComponentProps, ChildrenComponentProps, OptionItem {
  chevronClassName?: string
  chevronInterpolation?: InjectedInterpolation
  contentClassName?: string
  contentInterpolation?: InjectedInterpolation
  iconClassName?: string
  iconInterpolation?: InjectedInterpolation
  open?: boolean
  active?: boolean
  content?: React.ReactNode
  leftContent?: React.ReactNode
  leftIcon?: IconName
  leftIconColor?: SemanticNames
  rightContent?: React.ReactNode
  hide?: boolean
  disableIconActive?: boolean
  chevronIconType?: ChevronIconType
  chevronIconSize?: IconSize
  paddingLeft?: number
  name?: string
  href?: string
  onOpen?: (name?: string) => void
  onClick?: (e?: React.MouseEvent, name?: string) => void
  onClickArrow?: (name?: string) => void
  /* OptionItemHost for Sidebar Menu - nullable selectedOutlineItemIndex */
  selectedOutlineItemIndex?: number | null
  onChangeOption?: (name?: string, optionKey?: string, optionIndex?: number) => void
}
