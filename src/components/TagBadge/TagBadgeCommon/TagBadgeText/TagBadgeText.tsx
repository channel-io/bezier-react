/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Text } from '../../../Text'
import TagBadgeTextProps from './TagBadgeText.types'
import Styled from './TagBadgeText.styled'

export const TAG_BADGE_TEXT_TEST_ID = 'ch-design-system-avatar-group'

function TagBadgeText({
  typo,
  horizontalPadding,
  children,
}: TagBadgeTextProps) {
  return (
    <Styled.Wrapper
      horizontalPadding={horizontalPadding}
    >
      <Text typo={typo}>
        { children }
      </Text>
    </Styled.Wrapper>
  )
}

export default TagBadgeText
