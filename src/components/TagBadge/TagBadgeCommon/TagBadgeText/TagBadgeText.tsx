/* External dependencies */
import React, { useMemo } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Text } from 'Components/Text'
import TagBadgeTextProps from './TagBadgeText.types'
import Styled from './TagBadgeText.styled'

// TODO: 테스트 코드 작성
const TAG_BADGE_TEXT_TEST_ID = 'bezier-react-avatar-group'

function TagBadgeText({
  testId = TAG_BADGE_TEXT_TEST_ID,
  typo,
  horizontalPadding,
  children,
}: TagBadgeTextProps) {
  const hasChildren = useMemo(() => !isEmpty(children), [children])
  return (
    <>
      { hasChildren && (
        <Styled.Wrapper
          data-testid={testId}
          horizontalPadding={horizontalPadding}
        >
          <Text typo={typo}>
            { children }
          </Text>
        </Styled.Wrapper>
      ) }
    </>
  )
}

export default TagBadgeText
