import React, {
  forwardRef,
  memo,
  useMemo,
} from 'react'

import { CancelSmallIcon } from '@channel.io/bezier-icons'

import {
  isEmpty,
  isNil,
} from '~/src/utils/typeUtils'

import {
  TAG_BADGE_ICON_SIZE,
  TAG_TEXT_HORIZONTAL_PADDING,
  TagBadgeSize,
  TagBadgeStyled,
  TagBadgeText,
  TagBadgeVariant,
  getProperTagBadgeBgColor,
  getProperTagBadgePadding,
  getProperTagBadgeRounding,
  getProperTagBadgeTypo,
} from '~/src/components/TagBadge/TagBadgeCommon'

import type TagProps from './Tag.types'

import Styled from './Tag.styled'

// TODO: 테스트 코드 작성
export const TAG_TEST_ID = 'bezier-react-tag'
export const TAG_DELETE_TEST_ID = 'bezier-react-tag-delete-icon'

export const Tag = memo(forwardRef<HTMLDivElement, TagProps>(function Tag({
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
}, forwardedRef) {
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
      testId={TAG_DELETE_TEST_ID}
      color="txt-black-darker"
      onClick={(e) => {
        e.stopPropagation()
        onDelete(e)
      }}
    />
  ), [onDelete])

  return (
    <TagBadgeStyled.Wrapper
      {...props}
      ref={forwardedRef}
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
}))
