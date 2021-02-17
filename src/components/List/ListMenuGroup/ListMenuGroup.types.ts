/* Internal dependencies */
import { ThemeKey } from '../../../foundation/Theme/ThemeType'
import { ContentComponentProps } from '../../../types/ComponentProps'
import { IconName } from '../../Icon'

export default interface ListMenuGroupProps extends ContentComponentProps {
  chevronClassName?: string
  contentClassName?: string
  iconClassName?: string
  open?: boolean
  active?: boolean
  content?: React.ReactNode
  paddingLeft?: number
  disableGroupSelect?: boolean
  leftIcon?: IconName
  leftIconColor?: ThemeKey
  disableIconActive?: boolean
  name?: string
  rightContent?: React.ReactNode
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
