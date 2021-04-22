/* External dependencies */
import React, { useMemo } from 'react'

/* Internal dependencies */
import { Icon } from '../../Icon'
import TagBadgeSize from '../constants/TagBadgeSize'
import { BADGE_TEXT_HORIZONTAL_PADDING, TAG_BADGE_ICON_SIZE } from '../constants/TagBadgeStyle'
import TagBadgeVariant from '../constants/TagBadgeVariant'
import { TagBadgeText } from '../TagBadgeText'
import {
  getProperBadgeColor,
  getProperTagBadgeBgColor,
  getProperTagBadgePadding,
  getProperTagBadgeRounding,
  getProperTagBadgeTypo,
} from '../utils/TagBadgeUtils'
import Styled from '../TagBadge.styled'
import BadgeProps from './Badge.types'

export const BADGE_TEST_ID = 'ch-design-system-badge'

function Badge({
  size = TagBadgeSize.M,
  variant = TagBadgeVariant.Default,
  iconName,
  children,
  // Injected Styles
  wrapperClassName,
  wrapperInterpolation,
  testId = BADGE_TEST_ID,
  ...props
}: BadgeProps) {
  const bgSemanticNames = useMemo(() => (getProperTagBadgeBgColor(variant)), [variant])
  const textSemanticNames = useMemo(() => (getProperBadgeColor(variant)), [variant])

  const IconComponent = useMemo(() => (iconName && (
    <Icon
      name={iconName}
      size={TAG_BADGE_ICON_SIZE}
      color={textSemanticNames}
    />
  )), [
    iconName,
    textSemanticNames,
  ])

  return (
    <Styled.Wrapper
      {...props}
      className={wrapperClassName}
      data-testid={testId}
      horizontalPadding={getProperTagBadgePadding(size)}
      rounding={getProperTagBadgeRounding(size)}
      bgColor={bgSemanticNames}
      color={textSemanticNames}
      interpolation={wrapperInterpolation}
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
