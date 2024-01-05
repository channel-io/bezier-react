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
  return (
    <div
      as={as}
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
      interpolation={interpolation}
      onClick={onClick}
    />
  )
}

export default forwardRef(Emoji)
