import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { type ButtonProps } from '~/src/components/AlphaButton/Button.types'
import { BaseButton } from '~/src/components/BaseButton'
import { type ButtonSize } from '~/src/components/Button'
import { Icon } from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import styles from './Button.module.scss'

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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      as = BaseButton,
      text,
      type,
      prefixIcon,
      suffixIcon,
      color = 'blue',
      variant = 'primary',
      size = 'm',
      disabled,
      className,
      ...rest
    },
    forwardedRef
  ) {
    const Comp = as as typeof BaseButton

    return (
      <Comp
        type={type ?? 'button'}
        ref={forwardedRef}
        disabled={disabled}
        className={classNames(
          styles.Button,
          styles[`size-${size}`],
          styles[`variant-${variant}`],
          styles[`color-${color}`],
          className
        )}
        {...rest}
      >
        <div className={classNames(styles.ButtonContent)}>
          {prefixIcon && (
            <Icon
              size={getIconSize(size)}
              source={prefixIcon}
              className={styles.ButtonIcon}
            />
          )}

          {/* TODO: use AlphaText later, add typo */}
          {text && (
            <Text
              className={styles.ButtonText}
              bold
            >
              {text}
            </Text>
          )}

          {suffixIcon && (
            <Icon
              size={getIconSize(size)}
              source={suffixIcon}
              className={styles.ButtonIcon}
            />
          )}
        </div>
      </Comp>
    )
  }
)
