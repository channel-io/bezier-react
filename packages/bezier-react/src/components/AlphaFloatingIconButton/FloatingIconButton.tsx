import React, { forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { type AlphaFloatingIconButtonProps } from '~/src/components/AlphaFloatingIconButton'
import { BaseButton } from '~/src/components/BaseButton'
import { type ButtonSize } from '~/src/components/Button'
import { Icon } from '~/src/components/Icon'
import { Spinner } from '~/src/components/Spinner'

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

function getSpinnerSize(size: ButtonSize) {
  return (
    {
      xs: 'xs',
      s: 'xs',
      m: 's',
      l: 's',
      xl: 's',
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
    icon,
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
        {isBezierIcon(icon) ? (
          <Icon
            size={getIconSize(size)}
            source={icon}
          />
        ) : (
          icon
        )}
      </div>

      {/* TODO: use AlphaSpinner */}
      {loading && (
        <div className={styles.ButtonLoader}>
          <Spinner size={getSpinnerSize(size)} />
        </div>
      )}
    </Comp>
  )
})
