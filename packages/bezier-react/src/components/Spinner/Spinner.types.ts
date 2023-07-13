import {
  type BezierComponentProps,
  type ColorProps,
  type SizeProps,
} from '~/src/types/ComponentProps'

export enum SpinnerSize {
  XL = 'xl',
  L = 'l',
  M = 'm',
  S = 's',
  XS = 'xs',
}

/** @deprecated */
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
