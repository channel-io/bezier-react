import React, { forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import {
  type ButtonProps,
  type ButtonSize,
} from '~/src/components/AlphaButton/Button.types'
import { BaseButton } from '~/src/components/BaseButton'
import { Icon, type IconSize } from '~/src/components/Icon'
import { Spinner } from '~/src/components/Spinner'
import { Text } from '~/src/components/Text'

import styles from './Button.module.scss'

function SideIcon({
  size,
  icon,
}: {
  size: IconSize
  icon?: ButtonProps['prefixIcon']
}) {
  return isBezierIcon(icon) ? (
    <Icon
      source={icon}
      size={size}
      className={styles.ButtonIcon}
    />
  ) : (
    icon
  )
}

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

function getTypography(size: ButtonSize) {
  return (
    {
      xs: '13',
      s: '13',
      m: '14',
      l: '15',
      xl: '18',
    } as const
  )[size]
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      as = BaseButton,
      text,
      prefixIcon,
      suffixIcon,
      color = 'blue',
      variant = 'primary',
      size = 'm',
      active,
      className,
      loading,
      ...rest
    },
    forwardedRef
  ) {
    const Comp = as as typeof BaseButton

    return (
      <Comp
        ref={forwardedRef}
        className={classNames(
          styles.Button,
          styles[`size-${size}`],
          styles[`variant-${variant}`],
          styles[`color-${color}`],
          active && styles.active,
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
          <SideIcon
            size={getIconSize(size)}
            icon={prefixIcon}
          />

          {/* TODO: use AlphaText later, add typo */}
          <Text
            className={styles.ButtonText}
            typo={getTypography(size)}
            bold
          >
            {text}
          </Text>

          <SideIcon
            size={getIconSize(size)}
            icon={suffixIcon}
          />
        </div>

        {/* TODO: use AlphaSpinner */}
        {loading && (
          <div className={styles.ButtonLoader}>
            <Spinner size={getSpinnerSize(size)} />
          </div>
        )}
      </Comp>
    )
  }
)
