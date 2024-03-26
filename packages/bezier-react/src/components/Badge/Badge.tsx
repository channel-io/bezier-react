import React, { forwardRef, memo } from 'react'

import { isEmpty } from '~/src/utils/type'

import { BaseTagBadge, BaseTagBadgeText } from '~/src/components/BaseTagBadge'
import { Icon } from '~/src/components/Icon'

import { type BadgeProps } from './Badge.types'

export const BADGE_TEST_ID = 'bezier-badge'

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
export const Badge = memo(
  forwardRef<HTMLDivElement, BadgeProps>(function Badge(
    { size = 'm', variant = 'default', icon, children, ...rest },
    forwardedRef
  ) {
    return (
      <BaseTagBadge
        ref={forwardedRef}
        size={size}
        variant={variant}
        data-testid={BADGE_TEST_ID}
        {...rest}
      >
        {icon && (
          <Icon
            source={icon}
            size="xs"
          />
        )}

        {!isEmpty(children) && (
          <BaseTagBadgeText
            size={size}
            marginHorizontal={3}
          >
            {children}
          </BaseTagBadgeText>
        )}
      </BaseTagBadge>
    )
  })
)
