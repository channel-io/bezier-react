import React, {
  forwardRef,
  memo,
} from 'react'

import classNames from 'classnames'

import { isEmpty } from '~/src/utils/type'

import { Icon } from '~/src/components/Icon'
import {
  TAG_BADGE_ICON_SIZE,
  TagBadgeSize,
  TagBadgeVariant,
  getProperTagBadgeTypo,
} from '~/src/components/TagBadge/TagBadgeCommon'
import commonStyles from '~/src/components/TagBadge/TagBadgeCommon/TagBadge.module.scss'
import { Text } from '~/src/components/Text'

import type BadgeProps from './Badge.types'

import styles from './Badge.module.scss'

export const BADGE_TEST_ID = 'bezier-react-badge'

/**
 * `Badge` is a component for representing badge, which consists of text and icon.
 *
 * @example
 * ```tsx
 * <Badge
 *   size={TagBadgeSize.XS}
 *   variant={TagBadgeVariant.Blue}
 *   icon={AppleIcon}
 * >
 *   Beta
 * </Badge>
 * ```
 */
export const Badge = memo(forwardRef<HTMLDivElement, BadgeProps>(function Badge({
  size = TagBadgeSize.M,
  variant = TagBadgeVariant.Default,
  icon,
  children,
  className,
  testId = BADGE_TEST_ID,
  ...rest
}, forwardedRef) {
  return (
    <div
      ref={forwardedRef}
      className={classNames(
        styles.Badge,
        styles[`variant-${variant}`],
        commonStyles.TagBadge,
        commonStyles[`size-${size}`],
        className,
      )}
      data-testid={testId}
      {...rest}
    >
      { icon && (
        <Icon
          source={icon}
          size={TAG_BADGE_ICON_SIZE}
        />
      ) }

      { !isEmpty(children) && (
        <Text
          typo={getProperTagBadgeTypo(size)}
          marginHorizontal={3}
        >
          { children }
        </Text>
      ) }
    </div>
  )
}))
