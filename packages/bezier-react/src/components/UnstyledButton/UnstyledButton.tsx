import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { type UnstyledButtonProps } from './UnstyledButton.types'

import styles from './UnstyledButton.module.scss'

export const UnstyledButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>(function UnstyledButton({
  className,
  children,
  ...rest
}, forwardedRef) {
  return (
    <button
      className={classNames(
        styles.UnstyledButton,
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
