import React, {
  type CSSProperties,
  forwardRef,
  memo,
} from 'react'

import classNames from 'classnames'

import {
  getMarginStyle,
  splitByMarginProps,
} from '~/src/utils/props'
import { isEmpty } from '~/src/utils/type'

import { Icon } from '~/src/components/Icon'
import {
  BADGE_TEXT_HORIZONTAL_PADDING,
  TAG_BADGE_ICON_SIZE,
  TagBadgeSize,
  TagBadgeVariant,
  getProperBadgeTextColor,
  getProperTagBadgeBgColor,
  getProperTagBadgeTypo,
} from '~/src/components/TagBadge/TagBadgeCommon'
import common from '~/src/components/TagBadge/TagBadgeCommon/TagBadge.module.scss'
import { Text } from '~/src/components/Text'

import type BadgeProps from './Badge.types'

export const BADGE_TEST_ID = 'bezier-react-badge'

export const Badge = memo(forwardRef<HTMLDivElement, BadgeProps>(function Badge(props, forwardedRef) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const marginStyle = getMarginStyle(marginProps)
  const {
    size = TagBadgeSize.M,
    variant = TagBadgeVariant.Default,
    icon,
    children,
    className,
    testId = BADGE_TEST_ID,
    style,
    ...rest
  } = marginRest

  const bgColor = getProperTagBadgeBgColor(variant)
  const textColor = getProperBadgeTextColor(variant)

  return (
    <div
      style={{
        ...style,
        ...marginStyle.style,
        '--b-tag-badge-background-color': `var(--${bgColor})`,
      } as CSSProperties}
      ref={forwardedRef}
      className={classNames(
        common.TagBadge,
        common[`size-${size}`],
        marginStyle.className,
        className,
      )}
      data-testid={testId}
      color={textColor}
      {...rest}
    >
      { icon && (
        <Icon
          source={icon}
          size={TAG_BADGE_ICON_SIZE}
          color={textColor}
        />
      ) }

      { !isEmpty(children) && (
        <Text
          color={textColor}
          typo={getProperTagBadgeTypo(size)}
          mx={BADGE_TEXT_HORIZONTAL_PADDING}
        >
          { children }
        </Text>
      ) }
    </div>
  )
}))
