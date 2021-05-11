/* Internal dependencies */
import { TextProps } from '../Text'
import { UIComponentProps } from '../../types/ComponentProps'
import type { IconName } from '../Icon/generated'

export enum ButtonTheme {
  Normal = 'normal',
}

export default interface ButtonProps extends UIComponentProps {
  text?: string
  typo?: TextProps['typo']
  theme?: ButtonTheme
  icon?: IconName
  onClick?: (event: MouseEvent) => void
  width: number
  height: number
}
