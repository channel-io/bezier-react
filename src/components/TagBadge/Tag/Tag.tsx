/* External dependencies */
import React, { useMemo } from 'react'

/* Internal dependencies */
import TagBadgeSize from '../constants/TagBadgeSize'
import { TAG_BADGE_ICON_SIZE, TAG_TEXT_HORIZONTAL_PADDING } from '../constants/TagBadgeStyle'
import TagBadgeVariant from '../constants/TagBadgeVariant'
import TagBadgeText from '../TagBadgeText/TagBadgeText'
import {
  getProperTagBadgeBgColor,
  getProperTagBadgePadding,
  getProperTagBadgeTypo,
  getProperTagBadgeRounding,
} from '../utils/TagBadgeUtils'
import Styled from './Tag.styled'
import TagProps from './Tag.types'

export const TAG_TEST_ID = 'ch-design-system-tag'

function Tag({
  size = TagBadgeSize.M,
  variant = TagBadgeVariant.Default,
  color: givenColor,
  closable = false,
  children,
  // Handlers
  onClose,
  // Injected Styles
  wrapperClassName,
  wrapperInterpolation,
  testId = TAG_TEST_ID,
  ...props
}: TagProps) {
  const bgColor = useMemo(() => (
    givenColor || getProperTagBadgeBgColor(variant)
  ), [givenColor, variant])

  const CloseIconComponent = useMemo(() => closable && (
    <Styled.CloseIcon
      name="cancel-small"
      size={TAG_BADGE_ICON_SIZE}
      color="txt-black-darker"
    />
  ), [closable])

  return (
    <Styled.Wrapper
      {...props}
      className={wrapperClassName}
      data-testid={testId}
      horizontalPadding={getProperTagBadgePadding(size)}
      rounding={getProperTagBadgeRounding(size)}
      bgColor={bgColor}
      interpolation={wrapperInterpolation}
    >
      <TagBadgeText
        horizontalPadding={TAG_TEXT_HORIZONTAL_PADDING}
        typo={getProperTagBadgeTypo(size)}
      >
        { children }
      </TagBadgeText>
      { CloseIconComponent }
    </Styled.Wrapper>
  )
}

export default Tag
