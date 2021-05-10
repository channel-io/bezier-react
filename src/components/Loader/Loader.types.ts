/* Internal dependencies */
import { SemanticNames } from '../../foundation'
import { ChildrenComponentProps } from '../../types/ComponentProps'

// TODO: 나중에 디자인의견 반영하여 수정
export enum SpinnerSize {
  L = 50,
  Normal = 25,
  S = 20,
  XS = 16,
  XXS = 12,
}

export enum SpinnerThickness {
  Bold = 4,
  Normal = 3,
  Light = 2,
}

export default interface LoaderProps extends ChildrenComponentProps {
  isLoading: boolean
  size?: SpinnerSize
  thickness?: SpinnerThickness
  color?: SemanticNames
  delayed?: boolean
  dim?: boolean
  occupy?: boolean
}

export interface StyledLoaderProps {
  dim?: boolean
  relative?: boolean
  delayed?: boolean
}

export interface StyledSpinnerProps {
  size: SpinnerSize
  thickness: SpinnerThickness
  color: SemanticNames
}
