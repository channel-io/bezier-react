/* External dependencies */
import React from 'react'

/* Internal dependencies */
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
  onClick,
}: EmojiProps) {
  return (
    <Icon
      as={as}
      data-testid={testId}
      role="img"
      style={style}
      size={size}
      className={className}
      interpolation={interpolation}
      imageUrl={imageUrl}
      onClick={onClick}
    />
  )
}

export default Emoji
