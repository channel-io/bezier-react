/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Text } from '~/src/components/Text'

import type TagBadgeTextProps from './TagBadgeText.types'

import Styled from './TagBadgeText.styled'

// TODO: 테스트 코드 작성
const TAG_BADGE_TEXT_TEST_ID = 'bezier-react-avatar-group'

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
