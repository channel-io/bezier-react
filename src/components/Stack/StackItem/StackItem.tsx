/* External dependencies */
import React, { forwardRef } from 'react'
import type { Ref } from 'react'
import {
  isInteger,
  isNil,
} from 'lodash-es'

/* Internal dependencies */
import * as Styled from './StackItem.styled'
import type StackItemProps from './StackItem.types'

const sanitizeWeight = (weight: number): number => {
  if (weight < 0) { return 0 }
  if (!isInteger(weight)) { return 0 }
  return weight
}

/**
 * `StackItem` is used along `Stack`.
 * It inherits the default settings from `Stack`,
 * but allows to override some props to customize the behavior
 * of particular item.
 *
 * If you are not using `StackItem` as the direct child of `Stack`,
 * be reminded to forward props in `StackItemProps` to `StackItem` component,
 * or manually implement the behavior compatible with `StackItem`.
 */
function StackItem(
  {
    as = 'div',
    testId = 'bezier-react-stack-item',
    style,
    className,
    interpolation,
    children,
    direction,
    mainAxis,
    crossAxis,
    size,
    weight = 0,
    grow = false,
    shrink = false,
    marginBefore = 0,
    marginAfter = 0,
  }: StackItemProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (
    <Styled.Container
      ref={forwardedRef}
      as={as}
      data-testid={testId}
      style={{
        ...style,
        '--main-axis-size': isNil(size) ? undefined : `${size}px`,
        '--grow-weight': grow ? sanitizeWeight(weight) : '0',
        '--shrink-weight': shrink ? sanitizeWeight(weight) : '0',
        '--margin-before': `${marginBefore}px`,
        '--margin-after': `${marginAfter}px`,
      }}
      className={className}
      interpolation={interpolation}
      direction={direction}
      mainAxis={mainAxis}
      crossAxis={crossAxis}
    >
      { children }
    </Styled.Container>
  )
}

export default forwardRef(StackItem)
