/* Internal dependencies */
import { TextProps } from '../Text'
import { StylableComponentProps } from '../../types/ComponentProps'
import type { IconName } from '../Icon/generated'
import type { ButtonThemeType } from './ButtonTheme'

export enum ButtonTheme {
  Normal = 'normal',
}

export enum ButtonIconPosition {
  Left = 'left',
  Right = 'right',
}

export interface ButtonProps extends StylableComponentProps {
  text?: string
  typo?: TextProps['typo']
  bold?: boolean
  italic?: boolean
  theme?: ButtonThemeType
  icon?: IconName
  iconPosition?: ButtonIconPosition
  onClick?: (event: MouseEvent) => void
}
