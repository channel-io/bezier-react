/* Internal dependencies */
import { StylableComponentProps, ChildrenComponentProps } from '../../types/ComponentProps'

export enum AvatarSize {
  XXXS = 16,
  XXS = 20,
  XS = 24,
  S = 30,
  M = 36,
  L = 42,
  XL = 48,
  XXL = 90,
  XXXL = 120,
}

export interface AvatarGroupProps extends ChildrenComponentProps {
  max: number
  size?: AvatarSize
  spacing?: number
}

export interface AvatarProps extends StylableComponentProps {
  src: string
  name?: string
  testId?: string
  size?: AvatarSize
  showBorder?: boolean
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void
}
