'use client'

import { forwardRef } from 'react'


import { BaseTagBadge, BaseTagBadgeText } from '~/src/beta/BaseTagBadge'
import { Icon } from '~/src/beta/Icon'
import { isEmpty } from '~/src/utils/type'

import { type BadgeProps } from './Badge.types'


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
