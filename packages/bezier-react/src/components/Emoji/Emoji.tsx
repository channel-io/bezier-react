import React, { type CSSProperties, forwardRef } from 'react'

import classNames from 'classnames'

import { isDev } from '~/src/utils/assert'
import { cssUrl } from '~/src/utils/style'

import { type EmojiProps } from './Emoji.types'

import styles from './Emoji.module.scss'

export const EMOJI_TEST_ID = 'bezier-emoji'

const getEmojiUrl = (name: EmojiProps['name'], size: '160' | '80' | '44') => {
  return `https://cf${isDev() ? '.exp' : ''}.channel.io/asset/emoji/images/${size}/${encodeURIComponent(name)}.png`
}

/**
 * `Emoji` is a component for representing emoji with variant size.
 * @example
 * ```tsx
 * <Emoji
 *   name="A"
 *   size="20"
 * />
 * ```
 */
export const Emoji = forwardRef<HTMLDivElement, EmojiProps>(function Emoji(
  { style, imageUrl, className, name, size = '24', ...rest },
  forwardedRef
) {
  const assetSize = Number(size) >= 60 ? '160' : '80'

  return (
    <div
      ref={forwardedRef}
      role="img"
      aria-description={name}
      style={
        {
          '--b-emoji-background-image': cssUrl(
            imageUrl ?? getEmojiUrl(name, assetSize)
          ),
          ...style,
        } as CSSProperties
      }
      className={classNames(styles.Emoji, styles[`size-${size}`], className)}
      data-testid={EMOJI_TEST_ID}
      {...rest}
    />
  )
})
