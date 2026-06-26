'use client'

import { forwardRef } from 'react'

import classNames from 'classnames'

import { type BaseButtonProps } from './BaseButton.types'

import styles from './BaseButton.module.scss'

/**
 * `BaseButton` is a reset-style button component with a focus ring, intended for internal use only.
 */
export const BaseButton = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  BaseButtonProps
>(
  function BaseButton(
    { as = 'button', className, children, disabled, type = 'button', ...rest },
    forwardedRef
  ) {
    if (as === 'a') {
      const { onClick, tabIndex, ...anchorRest } =
        rest as React.AnchorHTMLAttributes<HTMLAnchorElement>

      return (
        <a
          className={classNames(styles.BaseButton, className)}
          ref={forwardedRef as React.Ref<HTMLAnchorElement>}
          {...anchorRest}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : tabIndex}
          onClick={(event) => {
            if (disabled) {
              event.preventDefault()
              event.stopPropagation()
              return
            }

            onClick?.(event)
          }}
        >
          {children}
        </a>
      )
    }

    const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>

    return (
      <button
        className={classNames(styles.BaseButton, className)}
        ref={forwardedRef as React.Ref<HTMLButtonElement>}
        {...buttonRest}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
)
