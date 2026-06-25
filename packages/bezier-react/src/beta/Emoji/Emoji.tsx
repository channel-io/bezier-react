'use client'

import { type CSSProperties, forwardRef } from 'react'

import classNames from 'classnames'

import { isDev } from '~/src/utils/assert'
import { cssUrl } from '~/src/utils/style'

import type { EmojiProps, EmojiSize } from './Emoji.types'

import styles from './Emoji.module.scss'




const INNER_EMOJI_SIZE: Record<EmojiSize, number> = {
  '16': 14,
  '20': 18,
  '24': 22,
  '30': 28,
  '36': 33,
  '42': 38,
  '48': 44,
  '60': 55,
  '72': 66,
  '90': 82,
  '120': 110,
}

const EMOJI_TEST_ID = 'bezier-emoji'

function getEmojiUrl(name: EmojiProps['name'], size: '160' | '80') {
  return `https://cf${isDev() ? '.exp' : ''}.channel.io/asset/emoji/images/${size}/${encodeURIComponent(name)}.png`
}

/**
 * `Emoji` renders a Channel emoji asset.
 *
 * The outer box follows the requested `size`, while the bitmap is rendered
 * slightly smaller and centered so it aligns with icon sizing.
 */
export const Emoji = forwardRef<HTMLDivElement, EmojiProps>(function Emoji(
  {
    style,
    className,
    name,
    size = '24',
    role,
    'aria-label': ariaLabel,
    ...rest
  },
  forwardedRef
) {
  const assetSize = Number(size) >= 60 ? '160' : '80'

  return (
    <div
      ref={forwardedRef}
      role={role ?? 'img'}
      aria-label={ariaLabel ?? name}
      style={
        {
          '--b-beta-emoji-background-image': cssUrl(
            getEmojiUrl(name, assetSize)
          ),
          '--b-beta-emoji-inner-size': `${INNER_EMOJI_SIZE[size]}px`,
          ...style,
        } as CSSProperties
      }
      className={classNames(styles.Emoji, styles[`size-${size}`], className)}
      data-testid={EMOJI_TEST_ID}
      {...rest}
    />
  )
})
