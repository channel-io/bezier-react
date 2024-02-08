import type {
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  SizeProps,
} from '~/src/types/props'

import { type StatusType } from '~/src/components/Status'

export type AvatarSize =
| '20'
| '24'
| '30'
| '36'
| '42'
| '48'
| '72'
| '90'
| '120'

interface AvatarOwnProps {
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

export interface AvatarProps extends
  BezierComponentProps<'div'>,
  SizeProps<AvatarSize>,
  DisableProps,
  ChildrenProps,
  AvatarOwnProps {}
