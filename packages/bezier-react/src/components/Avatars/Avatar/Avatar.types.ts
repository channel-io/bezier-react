/* Internal dependencies */
import type {
  AdditionalStylableProps,
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  SizeProps,
} from '~/src/types/ComponentProps'

import { type StatusType } from '~/src/components/Status'

export enum AvatarSize {
  Size20 = 20,
  Size24 = 24,
  Size30 = 30,
  Size36 = 36,
  Size42 = 42,
  Size48 = 48,
  Size72 = 72,
  Size90 = 90,
  Size120 = 120,
}

type MouseEventHandler = React.MouseEventHandler<HTMLDivElement>

interface AvatarOptions {
  /**
   * Semantic name of the avatar.
   */
  name: string

  /**
   * Asset image URL of the avatar.
   *
   * @default ''
   */
  avatarUrl?: string

  /**
   * Fallback image URL for the avatar.
   *
   * @default DEFAULT_AVATAR_URL
   */
  fallbackUrl?: string

  /**
   * Additional status type for this avatar.
   * Typically, this is used to indicate the status of the user (online, offline, etc).
   *
   * If additional customization of the status component is needed,
   * pass the custom status component as `children` of the Avatar component.
   */
  status?: StatusType

  /**
   * Whether to display the border of the avatar.
   *
   * @default false
   */
  showBorder?: boolean

  /**
   * Handler to be called when the avatar is clicked.
   */
  onClick?: MouseEventHandler

  /**
   * Handler to be called when the mouse enters the avatar.
   */
  onMouseEnter?: MouseEventHandler

  /**
   * Handler to be called when the mouse leaves the avatar.
   */
  onMouseLeave?: MouseEventHandler
}

export default interface AvatarProps extends
  BezierComponentProps,
  ChildrenProps,
  SizeProps<AvatarSize>,
  DisableProps,
  AdditionalStylableProps<'wrapper'>,
  AvatarOptions {}
