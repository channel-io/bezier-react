/* Internal dependencies */
import { SemanticNames } from '../../foundation'
import { BezierComponentProps } from '../../types/ComponentProps'

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

export default interface SpinnerProps extends BezierComponentProps {
  size?: SpinnerSize
  color?: SemanticNames
}

export interface StyledSpinnerProps extends SpinnerProps {
  size: SpinnerSize
  color?: SemanticNames
}
