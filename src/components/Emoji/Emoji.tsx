/* External dependencies */
import React, { useMemo, forwardRef } from 'react'
import { noop } from 'lodash'

/* Internal dependencies */
import { backgroundImageVariable } from 'Foundation'
import type EmojiProps from './Emoji.types'
import { EmojiSize } from './Emoji.types'
import { Icon } from './Emoji.styled'

export const EMOJI_TEST_ID = 'bezier-react-emoji'

function Emoji(
  {
    as,
    style,
    imageUrl,
    className,
    name,
    interpolation,
    size = EmojiSize.Size24,
    testId = EMOJI_TEST_ID,
    onClick = noop,
  }: EmojiProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
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
      ref={forwardedRef}
      data-testid={testId}
      role="img"
      aria-label={name}
      style={mergedStyle}
      size={size}
      className={className}
      interpolation={interpolation}
      imageUrl={imageUrl}
      onClick={onClick}
    />
  )
}

export default forwardRef(Emoji)
