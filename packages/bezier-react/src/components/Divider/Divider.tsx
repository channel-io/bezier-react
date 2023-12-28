import React, {
  type CSSProperties,
  forwardRef,
} from 'react'

import * as SeparatorPrimitive from '@radix-ui/react-separator'
import classNames from 'classnames'

import type DividerProps from './Divider.types'

import styles from './Divider.module.scss'

export const DIVIDER_TEST_ID = 'bezier-react-divider'

export const DIVIDER_THICKNESS = 1

/**
 * `Divider` is a component to visually or semantically separate content.
 *
 * @example
 *
 * ```tsx
 * <Divider
 *   withoutSideIndent
 * />
 * ```
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(({
  orientation = 'horizontal',
  decorative,
  testId = DIVIDER_TEST_ID,
  withoutSideIndent = false,
  withoutParallelIndent = false,
  withoutIndent = false,
  style,
  className,
  ...rest
}, forwardedRef,
) => (
  <SeparatorPrimitive.Root
    asChild
    orientation={orientation}
    decorative={decorative}
  >
    <div
      ref={forwardedRef}
      data-testid={testId}
      style={{
        '--b-divider-thickness': `${DIVIDER_THICKNESS}px`,
        ...style,
      } as CSSProperties}
      className={classNames(
        styles.Divider,
        styles[orientation],
        withoutIndent && styles['without-indent'],
        withoutParallelIndent && styles['without-parallel-indent'],
        withoutSideIndent && styles['without-side-indent'],
        className,
      )}
      {...rest}
    />
  </SeparatorPrimitive.Root>
))
