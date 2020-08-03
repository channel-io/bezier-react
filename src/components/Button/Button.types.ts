export enum ButtonTheme {
  Normal = 'normal'
}

interface ButtonProps {
  theme?: ButtonTheme
  onClick?: () => void
}

export type {
  ButtonProps,
}
