'use client'

import { forwardRef } from 'react'
import * as React from 'react'

import classNames from 'classnames'

import { betaTokenCssVar } from '~/src/utils/style'

import { type SpinnerProps } from './Spinner.types'

import styles from './Spinner.module.scss'

export const SPINNER_TEST_ID = 'bezier-spinner'

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  function Spinner(
    { style, className, size = 'm', color, ...rest },
    forwardedRef
  ) {
    return (
      <div
        {...rest}
        ref={forwardedRef}
        style={
          {
            '--b-spinner-color': betaTokenCssVar(color),
            ...style,
          } as React.CSSProperties
        }
        className={classNames(
          styles.Spinner,
          styles[`size-${size}`],
          className
        )}
        key="spinner"
        data-testid={SPINNER_TEST_ID}
      />
    )
  }
)
