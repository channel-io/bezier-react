import React, {
  forwardRef,
  memo,
  useMemo,
} from 'react'

import { isEmpty } from '~/src/utils/type'

import { Icon } from '~/src/components/Icon'
import {
  BADGE_TEXT_HORIZONTAL_PADDING,
  TAG_BADGE_ICON_SIZE,
  TagBadgeSize,
  TagBadgeStyled,
  TagBadgeText,
  TagBadgeVariant,
  getProperBadgeTextColor,
  getProperTagBadgeBgColor,
  getProperTagBadgePadding,
  getProperTagBadgeRounding,
  getProperTagBadgeTypo,
} from '~/src/components/TagBadge/TagBadgeCommon'

import type BadgeProps from './Badge.types'

// TODO: 테스트 코드 작성
export const BADGE_TEST_ID = 'bezier-react-badge'

export const Badge = memo(forwardRef<HTMLDivElement, BadgeProps>(function Badge({
  size = TagBadgeSize.M,
  variant = TagBadgeVariant.Default,
  icon,
  children,
  className,
  interpolation,
  testId = BADGE_TEST_ID,
  ...props
}, forwardedRef) {
  const hasChildren = !isEmpty(children)

  const bgSemanticName = useMemo(() => (getProperTagBadgeBgColor(variant)), [variant])
  const textSemanticName = useMemo(() => (getProperBadgeTextColor(variant)), [variant])

  const IconComponent = useMemo(() => (icon && (
    <Icon
      source={icon}
      size={TAG_BADGE_ICON_SIZE}
      color={textSemanticName}
    />
  )), [
    icon,
    textSemanticName,
  ])

  return (
    <TagBadgeStyled.Wrapper
      {...props}
      ref={forwardedRef}
      className={className}
      interpolation={interpolation}
      data-testid={testId}
      horizontalPadding={getProperTagBadgePadding(size)}
      rounding={getProperTagBadgeRounding(size)}
      color={textSemanticName}
      bgColor={bgSemanticName}
    >
      { IconComponent }

      { hasChildren && (
        <TagBadgeText
          horizontalPadding={BADGE_TEXT_HORIZONTAL_PADDING}
          typo={getProperTagBadgeTypo(size)}
        >
            { children }
        </TagBadgeText>
      ) }
    </TagBadgeStyled.Wrapper>
  )
}))
