/* Internal dependencies */
import { SemanticNames } from 'Foundation'
import { ChildrenComponentProps, ContentComponentProps } from 'Types/ComponentProps'
import InjectedInterpolation from 'Types/InjectedInterpolation'
import OptionItem from 'Types/OptionItem'
import { IconName, IconSize } from 'Components/Icon'

export enum ChevronIconType {
  Normal = 'chevron',
  Small = 'chevron-small',
}

export default interface OutlineItemProps extends ContentComponentProps, ChildrenComponentProps, OptionItem {
  leftIconTestId?: string
  chevronClassName?: string
  chevronInterpolation?: InjectedInterpolation
  contentClassName?: string
  contentInterpolation?: InjectedInterpolation
  iconClassName?: string
  iconInterpolation?: InjectedInterpolation
  open?: boolean
  active?: boolean
  focused?: boolean
  content?: React.ReactNode
  leftContent?: React.ReactNode
  leftIcon?: IconName
  leftIconColor?: SemanticNames
  rightContent?: React.ReactNode
  hide?: boolean
  disableIconActive?: boolean
  disableChevron?: boolean
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
