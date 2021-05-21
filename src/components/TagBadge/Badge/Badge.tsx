/* External dependencies */
import React, { useMemo } from 'react'

/* Internal dependencies */
import { Icon } from '../../Icon'
import {
  TagBadgeText,
  TagBadgeSize,
  TagBadgeVariant,
  TAG_BADGE_ICON_SIZE,
  BADGE_TEXT_HORIZONTAL_PADDING,
  getProperBadgeTextColor,
  getProperTagBadgeBgColor,
  getProperTagBadgePadding,
  getProperTagBadgeRounding,
  getProperTagBadgeTypo,
  TagBadgeStyled as Styled,
} from '../TagBadgeCommon'
import BadgeProps from './Badge.types'

// TODO: 테스트 코드 작성
const BADGE_TEST_ID = 'bezier-react-badge'

function Badge({
  size = TagBadgeSize.M,
  variant = TagBadgeVariant.Default,
  iconName,
  children,
  className,
  interpolation,
  testId = BADGE_TEST_ID,
  ...props
}: BadgeProps) {
  const bgSemanticName = useMemo(() => (getProperTagBadgeBgColor(variant)), [variant])
  const textSemanticName = useMemo(() => (getProperBadgeTextColor(variant)), [variant])

  const IconComponent = useMemo(() => (iconName && (
    <Icon
      name={iconName}
      size={TAG_BADGE_ICON_SIZE}
      color={textSemanticName}
    />
  )), [
    iconName,
    textSemanticName,
  ])

  return (
    <Styled.Wrapper
      {...props}
      className={className}
      interpolation={interpolation}
      data-testid={testId}
      horizontalPadding={getProperTagBadgePadding(size)}
      rounding={getProperTagBadgeRounding(size)}
      bgColor={bgSemanticName}
      color={textSemanticName}
    >
      { IconComponent }

      <TagBadgeText
        horizontalPadding={BADGE_TEXT_HORIZONTAL_PADDING}
        typo={getProperTagBadgeTypo(size)}
      >
        { children }
      </TagBadgeText>
    </Styled.Wrapper>
  )
}

export default Badge
