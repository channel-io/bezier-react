/* Internal dependencies */
import { ContentComponentProps } from '../../../types/ComponentProps'
import { IconName } from '../../Icon'

export default interface ListMenuGroupProps extends ContentComponentProps {
  open?: boolean
  onOpen?: () => void
  content?: React.ReactNode
  leftIcon?: IconName
  rightContent?: React.ReactNode
  arrowClassName?: string
  onClickArrow?: () => void
  /* OptionItemHost for Sidebar Menu - nullable selectedMenuItemIndex */
  selectedMenuItemIndex?: number | null
  onChangeOption?: (optionKey?: string, optionIndex?: number) => void
}

export interface StyledWrapperProps extends ContentComponentProps {
  open?: boolean
  content?: React.ReactNode
  rightContent?: React.ReactNode
  currentMenuItemIndex?: number | null
  arrowClassName?: string
  selectedOptionIndex?: number
  onChangeOption?: (optionKey?: string, optionIndex?: number) => void
}
