import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { Text } from '~/src/components/Text'

import {
  type BaseTagBadgeProps,
  type BaseTagBadgeSize,
  type BaseTagBadgeTextProps,
} from './BaseTagBadge.types'

import styles from './BaseTagBadge.module.scss'

function getProperTypo(size: BaseTagBadgeSize) {
  return {
    xs: '11' as const,
    s: '13' as const,
    m: '14' as const,
    l: '15' as const,
  }[size]
}

/**
 * `BaseTagBadge` is the component on which `Tag` and `Badge` components are based.
 */
export const BaseTagBadge = forwardRef<HTMLDivElement, BaseTagBadgeProps>(
  function Tag({ size, variant, children, className, ...rest }, forwardedRef) {
    return (
      <div
        ref={forwardedRef}
        className={classNames(
          styles.BaseTagBadge,
          styles[`size-${size}`],
          styles[`variant-${variant}`],
          className
        )}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

/**
 * `BaseTagBadgeText` is the component on which `Tag` and `Badge` components are based.
 */
export const BaseTagBadgeText = forwardRef<
  HTMLDivElement,
  BaseTagBadgeTextProps
>(function BaseTagBadgeText({ size, children, ...rest }) {
  return (
    <Text
      typo={getProperTypo(size)}
      {...rest}
    >
      {children}
    </Text>
  )
})
