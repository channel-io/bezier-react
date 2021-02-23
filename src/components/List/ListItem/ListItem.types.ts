/* Internal dependencies */
import { ThemeKey } from '../../../foundation/Theme/ThemeType'
import ActivableElement from '../../../types/ActivatableElement'
import { ContentComponentProps, UIComponentProps } from '../../../types/ComponentProps'
import OptionItem from '../../../types/OptionItem'
import { IconName } from '../../Icon'

export default interface ListItemProps extends ContentComponentProps, OptionItem, ActivableElement {
  iconClassName?: string
  contentClassName?: string
  name?: string
  href?: string
  hide?: boolean
  nested?: boolean
  onClick?: (e: any, name?: string) => void
  leftIcon?: IconName | React.ReactNode
  leftIconColor?: ThemeKey
  disableIconActive?: boolean
  content?: React.ReactNode
  rightContent?: React.ReactNode
  paddingLeft?: number
}

export interface StyledWrapperProps extends UIComponentProps, OptionItem, ActivableElement {
  paddingLeft?: number
  active?: boolean
}
