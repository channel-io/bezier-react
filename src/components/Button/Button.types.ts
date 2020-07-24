/* Internal dependencies */
import { StylableComponentProps } from '../../types/ComponentProps'

export enum ButtonTheme {
  Normal = 'normal'
}

interface ButtonProps extends StylableComponentProps {
  theme?: ButtonTheme
  onClick?: (event: MouseEvent) => void
}

export type {
  ButtonProps,
}
