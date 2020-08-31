/* Internal dependencies */
import { TextProps } from '../Text'
import { StylableComponentProps } from '../../types/ComponentProps'
import type { IconName } from '../Icon/generated'

export enum ButtonTheme {
  Normal = 'normal'
}

export default interface ButtonProps extends StylableComponentProps {
  text?: string
  typo?: TextProps['typo']
  theme?: ButtonTheme
  icon?: IconName
  onClick?: (event: MouseEvent) => void
}
