/* External dependencies */
import React, { useMemo } from 'react'
import { isNil, isEmpty } from 'lodash-es'

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
} from 'Components/TagBadge/TagBadgeCommon'
import { CancelSmallIcon } from 'Components/Icon'
import Styled from './Tag.styled'
import TagProps from './Tag.types'

// TODO: 테스트 코드 작성
export const TAG_TEST_ID = 'bezier-react-tag'

function Tag({
  size = TagBadgeSize.M,
  variant = TagBadgeVariant.Default,
  color: givenColor,
  children,
  // Handlers
  onDelete,
  className,
  interpolation,
  testId = TAG_TEST_ID,
  ...props
}: TagProps) {
  const hasChildren = useMemo(() => !isEmpty(children), [children])

  const bgSemanticName = useMemo(() => (
    givenColor || getProperTagBadgeBgColor(variant)
  ), [
    givenColor,
    variant,
  ])

  const CloseIconComponent = useMemo(() => !isNil(onDelete) && (
    <Styled.CloseIcon
      source={CancelSmallIcon}
      size={TAG_BADGE_ICON_SIZE}
      color="txt-black-darker"
      onClick={onDelete}
    />
  ), [onDelete])

  return (
    <TagBadgeStyled.Wrapper
      {...props}
      className={className}
      interpolation={interpolation}
      data-testid={testId}
      horizontalPadding={getProperTagBadgePadding(size)}
      rounding={getProperTagBadgeRounding(size)}
      bgColor={bgSemanticName}
    >
      { hasChildren && (
        <TagBadgeText
          horizontalPadding={TAG_TEXT_HORIZONTAL_PADDING}
          typo={getProperTagBadgeTypo(size)}
        >
            { children }
        </TagBadgeText>
      ) }

      { CloseIconComponent }
    </TagBadgeStyled.Wrapper>
  )
}

export default React.memo(Tag)
