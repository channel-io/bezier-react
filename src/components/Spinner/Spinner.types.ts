/* Internal dependencies */
import { SemanticNames } from 'Foundation'
import { BezierComponentProps, SizeProps } from 'Types/ComponentProps'

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

interface SpinnerOptions {
  color?: SemanticNames
}

export default interface SpinnerProps extends
  BezierComponentProps,
  SizeProps<SpinnerSize>,
  SpinnerOptions {}

export interface StyledSpinnerProps extends SpinnerProps {
  size: NonNullable<SpinnerProps['size']>
}
