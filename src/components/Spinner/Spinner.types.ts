/* Internal dependencies */
import { SemanticNames } from 'Foundation'
import { BezierComponentProps } from 'Types/ComponentProps'

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
  size?: SpinnerSize
  color?: SemanticNames
}

export default interface SpinnerProps extends
  BezierComponentProps,
  SpinnerOptions {}

export interface StyledSpinnerProps extends SpinnerProps {
  size: NonNullable<SpinnerOptions['size']>
}
