import type {
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

interface AvatarOptions {
  /**
   * Semantic name of the avatar.
   */
  name: string
  /**
   * Asset image URL of the avatar.
   * @default ''
   */
  avatarUrl?: string
  /**
   * Fallback image URL for the avatar.
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
   * @default false
   */
  showBorder?: boolean
  /**
   * Whether to use the smooth corners feature.
   * Overrides whether the smooth corners feature is applied when it is enabled.
   * @default true
   */
  smoothCorners?: boolean
}

export default interface AvatarProps extends
  BezierComponentProps,
  ChildrenProps,
  SizeProps<AvatarSize>,
  DisableProps,
  React.HTMLAttributes<HTMLDivElement>,
  AvatarOptions {}
