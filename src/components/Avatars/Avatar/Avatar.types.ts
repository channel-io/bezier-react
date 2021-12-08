/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps, DisableProps, AdditionalStyleProps } from 'Types/ComponentProps'
import { StatusType } from 'Components/Status'

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

type MouseEventHandler = React.MouseEventHandler<HTMLDivElement>

interface AvatarOptions {
  name: string
  avatarUrl?: string
  fallbackUrl?: string
  size?: AvatarSize
  status?: StatusType
  showBorder?: boolean
  onClick?: MouseEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
}

export default interface AvatarProps extends
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  AdditionalStyleProps<'wrapper'>,
  AvatarOptions {}
