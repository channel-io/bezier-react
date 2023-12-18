import React, {
  type Ref,
  forwardRef,
  useMemo,
} from 'react'

import { px } from '~/src/utils/style'

import { flex } from '~/src/components/Stack/util'

import type { StackProps } from './AlphaStack.types'

import * as Styled from './AlphaStack.styled'

/**
 * `AlphaStack` provides an abstraction of **flex layout** so that
 * rendering of child elements **linearly** can be done
 * with simplified options.
 *
 * `AlphaStack` always fills the parent element.
 *
 * Be reminded that the first depth children element of AlphaStack would be StackItem that is adjusted by flex layout
 *
 * @example
 *
 * ```tsx
 * <AlphaStack direction="horizontal" spacing={8}>
 *  <div>{ ... }</div>
 *  <div>{ ... }</div>
 * </AlphaStack>
 * ```
 */
export const AlphaStack = forwardRef(function AlphaStack(
  {
    as = 'div',
    testId = 'bezier-react-alpha-stack',
    className,
    interpolation,
    style,
    children,
    direction,
    justify = 'start',
    align = 'stretch',
    spacing = 0,
    ...rest
  }: StackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  const stackStyle = useMemo(() => ({
    ...style,
    '--b-alpha-stack-direction': direction === 'horizontal' ? 'row' : 'column',
    '--b-alpha-stack-justify': flex(justify),
    '--b-alpha-stack-align': flex(align),
    '--b-alpha-stack-spacing': px(spacing),
  } as React.CSSProperties),
  [
    align,
    direction,
    justify,
    spacing,
    style,
  ])

  return (
    <Styled.Container
      ref={forwardedRef}
      as={as}
      data-testid={testId}
      style={stackStyle}
      className={className}
      interpolation={interpolation}
      {...rest}
    >
      { children }
    </Styled.Container>
  )
})
