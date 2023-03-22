/* External dependencies */
import React, {
  forwardRef,
} from 'react'
import type { Ref } from 'react'

/* Internal dependencies */
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
    style,
    className,
    interpolation,
    children,
    direction,
    justify = 'start',
    align = 'stretch',
    spacing = 0,
    ...rest
  }: AlphaStackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (
    <Styled.Container
      ref={forwardedRef}
      as={as}
      data-testid={testId}
      style={style}
      className={className}
      interpolation={interpolation}
      direction={direction}
      justify={justify}
      align={align}
      spacing={spacing}
      {...rest}
    >
      { children }
    </Styled.Container>
  )
})
