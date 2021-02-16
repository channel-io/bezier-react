/* Internal dependencies */
import { ThemeKey } from '../../../foundation/Theme/ThemeType'
import { ContentComponentProps } from '../../../types/ComponentProps'
import { IconName } from '../../Icon'

export default interface ListMenuGroupProps extends ContentComponentProps {
  chevronClassName?: string
  contentClassName?: string
  iconClassName?: string
  open?: boolean
  onOpen?: (name?: string) => void
  content?: React.ReactNode
  paddingLeft?: number
  leftIcon?: IconName
  leftIconColor?: ThemeKey
  name?: string
  rightContent?: React.ReactNode
  onClick?: (name?: string) => void
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
  onChangeOption?: (optionKey?: string, optionIndex?: number) => void
}

export interface StyledContentWrapperProps extends ContentComponentProps {
  open?: boolean
  currentMenuItemIndex?: number | null
}
