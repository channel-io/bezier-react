import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { type ButtonProps } from '~/src/components/AlphaButton/Button.types'
import { BaseButton } from '~/src/components/BaseButton'
import { Text } from '~/src/components/Text'

import styles from './Button.module.scss'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      as = BaseButton,
      text,
      type,
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
        {/* TODO: use AlphaText later*/}
        {text && (
          <Text
          // className={styles.ButtonText}
          // typo={getTypography(size)}
          >
            {text}
          </Text>
        )}
      </Comp>
    )
  }
)
