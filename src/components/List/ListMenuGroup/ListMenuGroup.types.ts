/* Internal dependencies */
import { ContentComponentProps } from '../../../types/ComponentProps'
import { IconName } from '../../Icon'

export default interface ListMenuGroupProps extends ContentComponentProps {
  arrowClassName?: string
  contentClassName?: string
  open?: boolean
  onOpen?: (name?: string) => void
  content?: React.ReactNode
  leftIcon?: IconName
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
  arrowClassName?: string
  selectedOptionIndex?: number
  onChangeOption?: (optionKey?: string, optionIndex?: number) => void
}

export interface StyledContentWrapperProps extends ContentComponentProps {
  open?: boolean
  currentMenuItemIndex?: number | null
}
