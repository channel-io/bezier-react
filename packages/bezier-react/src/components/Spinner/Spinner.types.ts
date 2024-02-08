import {
  type BezierComponentProps,
  type ColorProps,
  type SizeProps,
} from '~/src/types/props'

export type SpinnerSize =
| 'xl'
| 'l'
| 'm'
| 's'
| 'xs'

/** @deprecated */
export enum SpinnerThickness {
  Bold = 4,
  Normal = 3,
  Light = 2,
}

export interface SpinnerProps extends
  Omit<BezierComponentProps<'div'>, keyof ColorProps>,
  SizeProps<SpinnerSize>,
  ColorProps {}
