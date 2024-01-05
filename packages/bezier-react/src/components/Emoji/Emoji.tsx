import React, {
  type CSSProperties,
  forwardRef,
} from 'react'

import classNames from 'classnames'

import { noop } from '~/src/utils/function'

import type EmojiProps from './Emoji.types'
import { EmojiSize } from './Emoji.types'

import styles from './Emoji.module.scss'

export const EMOJI_TEST_ID = 'bezier-react-emoji'

function Emoji(
  {
    style,
    imageUrl,
    className,
    name,
    size = EmojiSize.Size24,
    testId = EMOJI_TEST_ID,
    onClick = noop,
  }: EmojiProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={forwardedRef}
      data-testid={testId}
      role="img"
      aria-label={name}
      style={{
        '--b-emoji-background-image': `url(${imageUrl})`,
        ...style,
      } as CSSProperties}
      className={classNames(
        styles.Emoji,
        styles[`size-${size}`],
        className,
      )}
      onClick={onClick}
    />
  )
}

export default forwardRef(Emoji)
