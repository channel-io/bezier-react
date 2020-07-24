/* Internal dependencies */
import { TextProps } from '../Text'
import { StylableComponentProps } from '../../types/ComponentProps'

export enum ButtonTheme {
  Normal = 'normal'
}

interface ButtonProps extends StylableComponentProps {
  text?: string
  typo?: TextProps['typo']
  theme?: ButtonTheme
  onClick?: (event: MouseEvent) => void
}

export type {
  ButtonProps,
}
