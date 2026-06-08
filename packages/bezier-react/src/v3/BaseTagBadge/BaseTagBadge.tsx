'use client'

import { forwardRef } from 'react'

import classNames from 'classnames'

import { Text } from '~/src/v3/Text'

import {
  type BaseTagBadgeProps,
  type BaseTagBadgeSize,
  type BaseTagBadgeTextProps,
} from './BaseTagBadge.types'

import styles from './BaseTagBadge.module.scss'

function getProperTypo(size: BaseTagBadgeSize) {
  return (
    {
      xs: '11',
      s: '12',
      m: '14',
      l: '15',
    } as const
  )[size]
}

/**
 * `BaseTagBadge` is the component on which `Tag` and `Badge` components are based.
 */
export const BaseTagBadge = forwardRef<HTMLDivElement, BaseTagBadgeProps>(
  function BaseTagBadge(
    { size, variant, children, className, ...rest },
    forwardedRef
  ) {
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
export const BaseTagBadgeText = forwardRef<HTMLElement, BaseTagBadgeTextProps>(
  function BaseTagBadgeText(
    { size, children, className, ...rest },
    forwardedRef
  ) {
    return (
      <Text
        {...rest}
        ref={forwardedRef}
        typo={getProperTypo(size)}
        fontWeight={size === 'xs' ? '400' : '500'}
        className={classNames(
          styles.label,
          size === 'xs' && styles['label-xs'],
          className
        )}
      >
        {children}
      </Text>
    )
  }
)
