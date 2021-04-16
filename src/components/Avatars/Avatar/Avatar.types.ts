/* Internal dependencies */
import { StylableComponentProps, ChildrenComponentProps } from '../../../types/ComponentProps'
import InjectedInterpolation from '../../../types/InjectedInterpolation'
import { StatusType } from '../../Status'

export enum AvatarSize {
  Size20 = 20,
  Size24 = 24,
  Size30 = 30,
  Size36 = 36,
  Size42 = 42,
  Size48 = 48,
  Size90 = 90,
  Size120 = 120,
}

export interface AvatarProps extends StylableComponentProps, ChildrenComponentProps {
  avatarUrl: string
  name?: string
  testId?: string
  size?: AvatarSize
  showBorder?: boolean
  status?: StatusType
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void
  interpolation?: InjectedInterpolation
}
