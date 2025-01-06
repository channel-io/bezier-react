'use client'

import { forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { getSourceSizeClassName } from '~/src/types/alpha-props-helpers'

import { AlphaIcon } from '~/src/components/AlphaIcon'
import { type AlphaIconButtonProps } from '~/src/components/AlphaIconButton'
import { AlphaLoader } from '~/src/components/AlphaLoader'
import { BaseButton } from '~/src/components/BaseButton'
import { type ButtonSize } from '~/src/components/Button'

import styles from './IconButton.module.scss'

function getIconSize(size: ButtonSize) {
  return (
    {
      xs: '16',
      s: '16',
      m: '20',
      l: '20',
      xl: '24',
    } as const
  )[size]
}

export const IconButton = forwardRef<HTMLButtonElement, AlphaIconButtonProps>(
  function IconButton(
    {
      as = BaseButton,
      color = 'blue',
      variant = 'primary',
      size = 'm',
      active,
      shape = 'rectangle',
      content,
      loading = false,
      disabled: disabledProp = false,
      className,
      ...rest
    },
    forwardedRef
  ) {
    const Comp = as as typeof BaseButton

    const disabled = loading || disabledProp

    return (
      <Comp
        ref={forwardedRef}
        className={classNames(
          styles.IconButton,
          styles[`size-${size}`],
          styles[`variant-${variant}`],
          styles[`color-${color}`],
          styles[`shape-${shape}`],
          active && styles.active,
          className
        )}
        disabled={disabled}
        {...rest}
      >
        <div
          className={classNames(
            styles.ButtonContent,
            loading && styles.loading
          )}
        >
          {isBezierIcon(content) ? (
            <AlphaIcon
              size={getIconSize(size)}
              source={content}
              className={styles.ButtonIcon}
            />
          ) : (
            content
          )}
        </div>

        {loading && (
          <div
            className={classNames(
              styles.ButtonLoader,
              getSourceSizeClassName(getIconSize(size))
            )}
          >
            <AlphaLoader
              size="s"
              className={styles.Loader}
              variant={variant === 'primary' ? 'on-overlay' : 'secondary'}
            />
          </div>
        )}
      </Comp>
    )
  }
)
