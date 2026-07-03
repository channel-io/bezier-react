'use client'

import { forwardRef } from 'react'


import { BaseTagBadge, BaseTagBadgeText } from '~/src/beta/BaseTagBadge'
import { Icon } from '~/src/beta/Icon'
import { type IconSemanticColor } from '~/src/types/tokens'
import { isEmpty } from '~/src/utils/type'

import { type BadgeProps, type BadgeVariant } from './Badge.types'


const BADGE_ICON_COLOR_BY_VARIANT = {
  default: 'icon-neutral-heavier',
  'neutral-light': 'icon-neutral',
  'neutral-dark': 'icon-absolute-white',
  blue: 'icon-accent-blue',
  cobalt: 'icon-accent-cobalt',
  teal: 'icon-accent-teal',
  green: 'icon-accent-green',
  olive: 'icon-accent-olive',
  pink: 'icon-accent-pink',
  navy: 'icon-accent-navy',
  yellow: 'icon-accent-yellow',
  orange: 'icon-accent-orange',
  red: 'icon-accent-red',
  purple: 'icon-accent-purple',
} satisfies Record<BadgeVariant, IconSemanticColor>


/**
 * `Badge` is a component for representing badge, which consists of text and icon.
 * @example
 * ```tsx
 * <Badge
 *   size="xs"
 *   variant="blue"
 *   icon={AppleIcon}
 * >
 *   Beta
 * </Badge>
 * ```
 */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Badge(
  { size = 'm', variant = 'default', truncated, icon, children, ...rest },
  forwardedRef
) {
  const ariaLabel =
    truncated && typeof children === 'string' ? children : undefined

  return (
    <BaseTagBadge
      ref={forwardedRef}
      size={size}
      variant={variant}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon && (
        <Icon
          source={icon}
          size={size === 'xs' ? '12' : '16'}
          color={BADGE_ICON_COLOR_BY_VARIANT[variant]}
        />
      )}

      {!isEmpty(children) && (
        <BaseTagBadgeText
          size={size}
          truncated={truncated}
        >
          {children}
        </BaseTagBadgeText>
      )}
    </BaseTagBadge>
  )
})
