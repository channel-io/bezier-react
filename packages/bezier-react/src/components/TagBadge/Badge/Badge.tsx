import React, { useMemo } from 'react'

import { isEmpty } from '~/src/utils/typeUtils'

import { LegacyIcon } from '~/src/components/LegacyIcon'
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

export const Badge = React.memo(function Badge({
  size = TagBadgeSize.M,
  variant = TagBadgeVariant.Default,
  iconName,
  children,
  className,
  interpolation,
  testId = BADGE_TEST_ID,
  ...props
}: BadgeProps) {
  const hasChildren = !isEmpty(children)

  const bgSemanticName = useMemo(() => (getProperTagBadgeBgColor(variant)), [variant])
  const textSemanticName = useMemo(() => (getProperBadgeTextColor(variant)), [variant])

  const IconComponent = useMemo(() => (iconName && (
    <LegacyIcon
      name={iconName}
      size={TAG_BADGE_ICON_SIZE}
      color={textSemanticName}
    />
  )), [
    iconName,
    textSemanticName,
  ])

  return (
    <TagBadgeStyled.Wrapper
      {...props}
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
})
