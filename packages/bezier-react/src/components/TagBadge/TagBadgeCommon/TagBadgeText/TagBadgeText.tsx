import React from 'react'

import { Text } from '~/src/components/Text'

import type TagBadgeTextProps from './TagBadgeText.types'

import Styled from './TagBadgeText.styled'

const TAG_BADGE_TEXT_TEST_ID = 'bezier-react-tag-badge-text'

function TagBadgeText({
  testId = TAG_BADGE_TEXT_TEST_ID,
  typo,
  horizontalPadding,
  children,
}: TagBadgeTextProps) {
  return (
    <Styled.Wrapper
      data-testid={testId}
      horizontalPadding={horizontalPadding}
    >
      <Text typo={typo}>
        { children }
      </Text>
    </Styled.Wrapper>
  )
}

export default TagBadgeText
