import { type SourceSize } from '~/src/types/alpha-tokens'
import {
  type BezierComponentProps,
  type ChildrenProps,
  type DisableProps,
  type SizeProps,
} from '~/src/types/props'

// TODO: Replace this with AlphaStatusBadgeType
import { type StatusType } from '~/src/components/Status'

export type AvatarSize = SourceSize

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

export interface AvatarProps
  extends BezierComponentProps<'div'>,
    SizeProps<AvatarSize>,
    DisableProps,
    ChildrenProps,
    AvatarOwnProps {}
