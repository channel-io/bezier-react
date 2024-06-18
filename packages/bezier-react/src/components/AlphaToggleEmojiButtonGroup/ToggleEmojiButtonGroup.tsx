import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { BaseButton } from '~/src/components/BaseButton'
import {
  ToggleEmojiButtonGroupProps as ToggleEmojiButtonGroupProps,
  ToggleEmojiButtonSourceProps,
} from './ToggleEmojiButtonGroup.types'
import * as Toggle from '@radix-ui/react-toggle'

import styles from './ToggleEmojiButtonGroup.module.scss'

export const ToggleEmojiButtonSource = forwardRef<
  HTMLButtonElement,
  ToggleEmojiButtonSourceProps
>(function ToggleEmojiButtonSource(
  { content, variant, className, selected, size = 'm', ...rest },
  forwardedRef
) {
  return (
    <Toggle.Root asChild>
      <BaseButton
        ref={forwardedRef}
        className={classNames(
          styles.ToggleEmojiButtonSource,
          styles[`size-${size}`],
          styles[`variant-${variant}`],
          className
        )}
        {...rest}
      >
        {content}
      </BaseButton>
    </Toggle.Root>
  )
})

export const ToggleEmojiButtonGroup = forwardRef<
  HTMLDivElement,
  ToggleEmojiButtonGroupProps
>(function ToggleEmojiButtonGroup(
  { fillDirection, className, ...rest },
  forwardedRef
) {
  return (
    <div
      ref={forwardedRef}
      className={classNames(
        styles.ToggleEmojiButtonGroup,
        fillDirection && styles[`fillDirection-${fillDirection}`],
        className
      )}
      {...rest}
    ></div>
  )
})
