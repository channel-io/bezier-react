/* External dependencies */
import React, { useMemo } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Icon } from 'Components/Icon'
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
  TagBadgeStyled,
} from 'Components/TagBadge/TagBadgeCommon'
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
  const hasChildren = useMemo(() => !isEmpty(children), [children])

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
}

export default React.memo(Badge)
