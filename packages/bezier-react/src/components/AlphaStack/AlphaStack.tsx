/* External dependencies */
import React, {
  forwardRef,
  useMemo,
  type Ref,
} from 'react'

/* Internal dependencies */
import { flex } from '~/src/components/Stack/util'
import * as Styled from './AlphaStack.styled'
import type { AlphaStackProps } from './AlphaStack.types'

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
  }: AlphaStackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  const stackStyle = useMemo(() => ({
    ...style,
    '--bezier-alpha-stack-direction': direction === 'horizontal' ? 'row' : 'column',
    '--bezier-alpha-stack-justify': flex(justify),
    '--bezier-alpha-stack-align': flex(align),
    '--bezier-alpha-stack-spacing': `${spacing}px`,
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
