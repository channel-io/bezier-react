export enum ButtonTheme {
  Normal = 'normal'
}

export interface ButtonProps {
  theme?: ButtonTheme
  onClick?: () => void
}
