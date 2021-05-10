/* Internal dependencies */
import { SemanticNames } from '../../foundation'
import { ChildrenComponentProps } from '../../types/ComponentProps'

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

export default interface SpinnerProps extends ChildrenComponentProps {
  size?: SpinnerSize
  color?: SemanticNames
}

export interface StyledSpinnerProps {
  size: SpinnerSize
  color?: SemanticNames
}
