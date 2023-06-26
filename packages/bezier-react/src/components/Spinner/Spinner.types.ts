import {
  type BezierComponentProps,
  type ColorProps,
  type SizeProps,
} from '~/src/types/ComponentProps'

export enum SpinnerSize {
  XL = 50,
  L = 24,
  M = 20,
  S = 16,
  XS = 12,
}

export enum SpinnerThickness {
  Bold = 4,
  Normal = 3,
  Light = 2,
}

export default interface SpinnerProps extends
  BezierComponentProps,
  SizeProps<SpinnerSize>,
  ColorProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {}

export interface StyledSpinnerProps extends SpinnerProps {
  size: NonNullable<SpinnerProps['size']>
}
