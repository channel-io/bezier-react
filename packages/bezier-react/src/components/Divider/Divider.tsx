import React, { forwardRef } from 'react'

import * as SeparatorPrimitive from '@radix-ui/react-separator'
import classNames from 'classnames'

import {
  getMarginStyle,
  splitByMarginProps,
} from '~/src/utils/props'

import type DividerProps from './Divider.types'

import styles from './Divider.module.scss'

export const DIVIDER_TEST_ID = 'bezier-react-divider'

export const Divider = forwardRef<HTMLDivElement, DividerProps>((
  props,
  forwardedRef,
) => {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const marginStyle = getMarginStyle(marginProps)

  const {
    orientation = 'horizontal',
    decorative,
    testId = DIVIDER_TEST_ID,
    withoutSideIndent = false,
    withoutParallelIndent = false,
    withoutIndent = false,
    style,
    className,
    ...rest
  } = marginRest

  return (
    <SeparatorPrimitive.Root
      asChild
      orientation={orientation}
      decorative={decorative}
    >
      <div
        ref={forwardedRef}
        data-testid={testId}
        style={{
          ...marginStyle.style,
          ...style,
        }}
        className={classNames(
          styles.Divider,
          styles[orientation],
          withoutIndent && styles['without-indent'],
          withoutParallelIndent && styles['without-parallel-indent'],
          withoutSideIndent && styles['without-side-indent'],
          marginStyle.className,
          className,
        )}
        {...rest}
      />
    </SeparatorPrimitive.Root>
  )
})
