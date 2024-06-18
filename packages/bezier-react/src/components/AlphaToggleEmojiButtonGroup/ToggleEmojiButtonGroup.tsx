import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { BaseButton } from '~/src/components/BaseButton'
import {
  ToggleEmojiButtonGroupProps as ToggleEmojiButtonGroupProps,
  ToggleEmojiButtonSourceProps,
} from './ToggleEmojiButtonGroup.types'
import * as Toggle from '@radix-ui/react-toggle'

import styles from './ToggleEmojiButtonGroup.module.scss'
import { AlphaSpinner } from '~/src/components/AlphaSpinner'

export const ToggleEmojiButtonSource = forwardRef<
  HTMLButtonElement,
  ToggleEmojiButtonSourceProps
>(function ToggleEmojiButtonSource(
  { content, variant, className, selected, size = 'm', loading, ...rest },
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
        <div
          className={classNames(
            styles.ButtonContent,
            loading && styles.loading
          )}
        >
          {content}
        </div>

        {loading && (
          <div className={classNames(styles.ButtonLoader)}>
            <AlphaSpinner
              className={styles.Spinner}
              variant="secondary"
            />
          </div>
        )}
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
