import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { type BaseButtonProps } from './BaseButton.types'

import styles from './BaseButton.module.scss'

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(function BaseButton({
  className,
  children,
  ...rest
}, forwardedRef) {
  return (
    <button
      className={classNames(
        styles.BaseButton,
        className,
      )}
      ref={forwardedRef}
      type="button"
      {...rest}
    >
      { children }
    </button>
  )
})
