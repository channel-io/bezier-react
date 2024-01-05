import React, {
  type CSSProperties,
  forwardRef,
} from 'react'

import classNames from 'classnames'

import { noop } from '~/src/utils/function'
import {
  getMarginStyles,
  splitByMarginProps,
} from '~/src/utils/props'

import {
  type EmojiProps,
  EmojiSize,
} from './Emoji.types'

import styles from './Emoji.module.scss'

export const EMOJI_TEST_ID = 'bezier-react-emoji'

export const Emoji = forwardRef<HTMLDivElement, EmojiProps>(function Emoji(props, forwardedRef) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const marginStyles = getMarginStyles(marginProps)
  const {
    style,
    imageUrl,
    className,
    name,
    size = EmojiSize.Size24,
    testId = EMOJI_TEST_ID,
    onClick = noop,
    ...rest
  } = marginRest

  return (
    <div
      ref={forwardedRef}
      data-testid={testId}
      role="img"
      aria-label={name}
      style={{
        '--b-emoji-background-image': `url(${imageUrl})`,
        ...marginStyles.style,
        ...style,
      } as CSSProperties}
      className={classNames(
        styles.Emoji,
        styles[`size-${size}`],
        marginStyles.className,
        className,
      )}
      onClick={onClick}
      {...rest}
    />
  )
})
