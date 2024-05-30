import React, { forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { type AlphaFloatingIconButtonProps } from '~/src/components/AlphaFloatingIconButton'
import { AlphaSpinner } from '~/src/components/AlphaSpinner'
import { BaseButton } from '~/src/components/BaseButton'
import { type ButtonSize } from '~/src/components/Button'
import { Icon } from '~/src/components/Icon'

import styles from './FloatingIconButton.module.scss'

function getIconSize(size: ButtonSize) {
  return (
    {
      xs: 'xxs',
      s: 'xs',
      m: 's',
      l: 's',
      xl: 'm',
    } as const
  )[size]
}

export const FloatingIconButton = forwardRef<
  HTMLButtonElement,
  AlphaFloatingIconButtonProps
>(function FloatingIconButton(
  {
    as = BaseButton,
    color = 'blue',
    variant = 'primary',
    size = 'm',
    active,
    content,
    loading,
    className,
    ...rest
  },
  forwardedRef
) {
  const Comp = as as typeof BaseButton

  return (
    <Comp
      ref={forwardedRef}
      className={classNames(
        styles.FloatingIconButton,
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        active && styles.active,
        className
      )}
      {...rest}
    >
      <div
        className={classNames(styles.ButtonContent, loading && styles.loading)}
      >
        {isBezierIcon(content) ? (
          <Icon
            size={getIconSize(size)}
            source={content}
          />
        ) : (
          content
        )}
      </div>

      {loading && (
        <div
          className={classNames(
            styles.ButtonLoader,
            styles[`size-${getIconSize(size)}`]
          )}
        >
          <AlphaSpinner
            className={styles.Spinner}
            size="s"
            variant="on-overlay"
          />
        </div>
      )}
    </Comp>
  )
})
