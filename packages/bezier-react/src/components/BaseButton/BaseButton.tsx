import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { type BaseButtonProps } from './BaseButton.types'

import styles from './BaseButton.module.scss'

/**
 * `BaseButton` is a reset-style button component with a focus ring, intended for internal use only.
 */
export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  function BaseButton(
    { className, children, type = 'button', ...rest },
    forwardedRef
  ) {
    return (
      <button
        className={classNames(styles.BaseButton, className)}
        ref={forwardedRef}
        type={type}
        {...rest}
      >
        {children}
      </button>
    )
  }
)
