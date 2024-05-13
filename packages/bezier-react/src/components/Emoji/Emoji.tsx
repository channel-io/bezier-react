import React, { type CSSProperties, forwardRef } from 'react'

import classNames from 'classnames'

import { cssUrl } from '~/src/utils/style'

import { type EmojiProps } from './Emoji.types'

import styles from './Emoji.module.scss'

export const EMOJI_TEST_ID = 'bezier-emoji'

/**
 * `Emoji` is a component for representing emoji with variant size.
 * @example
 * ```tsx
 * <Emoji
 *   name="A"
 *   imageUrl="https://cf.exp.channel.io/asset/emoji/images/80/a.png"
 *   size="20"
 * />
 * ```
 */
export const Emoji = forwardRef<HTMLDivElement, EmojiProps>(function Emoji(
  { style, imageUrl, className, name, size = '24', ...rest },
  forwardedRef
) {
  return (
    <div
      ref={forwardedRef}
      role="img"
      aria-description={name}
      style={
        {
          '--b-emoji-background-image': cssUrl(imageUrl),
          ...style,
        } as CSSProperties
      }
      className={classNames(styles.Emoji, styles[`size-${size}`], className)}
      data-testid={EMOJI_TEST_ID}
      {...rest}
    />
  )
})
