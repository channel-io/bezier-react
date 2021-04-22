/* External dependencies */
import React, { useMemo } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import {
  TagBadgeStyled,
  TagBadgeSize,
  TagBadgeVariant,
  TagBadgeText,
  TAG_BADGE_ICON_SIZE,
  TAG_TEXT_HORIZONTAL_PADDING,
  getProperTagBadgeBgColor,
  getProperTagBadgePadding,
  getProperTagBadgeTypo,
  getProperTagBadgeRounding,
} from '../TagBadgeCommon'
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
  onClose = noop,
  // Injected Styles
  wrapperClassName,
  wrapperInterpolation,
  testId = TAG_TEST_ID,
  ...props
}: TagProps) {
  const bgColor = useMemo(() => (
    givenColor || getProperTagBadgeBgColor(variant)
  ), [
    givenColor,
    variant,
  ])

  const CloseIconComponent = useMemo(() => closable && (
    <Styled.CloseIcon
      name="cancel-small"
      size={TAG_BADGE_ICON_SIZE}
      color="txt-black-darker"
      onClick={onClose}
    />
  ), [
    closable,
    onClose,
  ])

  return (
    <TagBadgeStyled.Wrapper
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
    </TagBadgeStyled.Wrapper>
  )
}

export default Tag
