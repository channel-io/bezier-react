/* External dependencies */
import React, { useMemo } from 'react'
import { noop } from 'lodash'

/* Internal dependencies */
import { backgroundImageVariable } from 'Foundation'
import EmojiProps, { EmojiSize } from './Emoji.types'
import { Icon } from './Emoji.styled'

export const EMOJI_TEST_ID = 'bezier-react-emoji'

function Emoji({
  as,
  style,
  imageUrl,
  className,
  interpolation,
  size = EmojiSize.Size24,
  testId = EMOJI_TEST_ID,
  onClick = noop,
}: EmojiProps) {
  const mergedStyle = useMemo(() => ({
    ...backgroundImageVariable({ imageUrl }),
    ...style,
  }), [
    style,
    imageUrl,
  ])

  return (
    <Icon
      as={as}
      data-testid={testId}
      role="img"
      style={mergedStyle}
      size={size}
      className={className}
      interpolation={interpolation}
      imageUrl={imageUrl}
      onClick={onClick}
    />
  )
}

export default Emoji
