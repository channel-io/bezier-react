import React, { forwardRef, memo } from 'react'

import classNames from 'classnames'

import { isEmpty } from '~/src/utils/type'

import { Icon } from '~/src/components/Icon'
import { getProperTagBadgeTypo } from '~/src/components/TagBadgeCommon'
import commonStyles from '~/src/components/TagBadgeCommon/TagBadge.module.scss'
import { Text } from '~/src/components/Text'

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
    { size = 'm', variant = 'default', icon, children, className, ...rest },
    forwardedRef
  ) {
    return (
      <div
        ref={forwardedRef}
        className={classNames(
          commonStyles.TagBadge,
          commonStyles[`size-${size}`],
          commonStyles[`variant-${variant}`],
          className
        )}
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
          <Text
            typo={getProperTagBadgeTypo(size)}
            marginHorizontal={3}
          >
            {children}
          </Text>
        )}
      </div>
    )
  })
)
