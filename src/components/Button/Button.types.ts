/* Internal dependencies */
import { StylableComponentProps } from '../../types/ComponentProps'

export enum ButtonTheme {
  Normal = 'normal'
}

export interface ButtonProps extends StylableComponentProps {
  theme?: ButtonTheme
  onClick?: (event: MouseEvent) => void
}
