'use client'

import { forwardRef } from 'react'

import * as SeparatorPrimitive from '@radix-ui/react-separator'
import classNames from 'classnames'

import { type DividerProps } from './Divider.types'

import styles from './Divider.module.scss'

/**
 * @deprecated
 */
const DIVIDER_TEST_ID = 'bezier-divider'

/**
 * `Divider` is a component to visually or semantically separate content.
 * @example
 *
 * ```tsx
 * <Divider
 *   withoutSideIndent
 * />
 * ```
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      decorative,
      withoutSideIndent = false,
      withoutParallelIndent = false,
      withoutIndent = false,
      style,
      className,
      ...rest
    },
    forwardedRef
  ) => (
    <SeparatorPrimitive.Root
      asChild
      orientation={orientation}
      decorative={decorative}
    >
      <div
        ref={forwardedRef}
        style={style}
        className={classNames(
          styles.Divider,
          styles.variables,
          styles[orientation],
          withoutIndent && styles['without-indent'],
          withoutParallelIndent && styles['without-parallel-indent'],
          withoutSideIndent && styles['without-side-indent'],
          className
        )}
        role="separator"
        data-testid={DIVIDER_TEST_ID}
        {...rest}
      />
    </SeparatorPrimitive.Root>
  )
)
