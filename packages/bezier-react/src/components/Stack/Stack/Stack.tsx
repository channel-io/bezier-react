/* External dependencies */
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useRef,
} from 'react'
import type { Ref } from 'react'

/* Internal dependencies */
import type StackProps from './Stack.types'

import * as Styled from './Stack.styled'

/**
 * `Stack` provides an abstraction of **flex layout** so that
 * rendering of child elements **linearly** can be done
 * with simplified options.
 *
 * `Stack` always fills the parent element.
 *
 * Be reminded to list `StackItem`s to be direct child of `Stack`.
 *
 * @example
 *
 * ```tsx
 * <Stack direction="horizontal" spacing={8}>
 *  <StackItem>{ ... }</StackItem>
 *  <StackItem>{ ... }</StackItem>
 * </Stack>
 * ```
 */
export const Stack = forwardRef(function Stack(
  {
    as = 'div',
    testId = 'bezier-react-stack',
    style,
    className,
    interpolation,
    children,
    direction,
    justify = 'start',
    align = 'stretch',
    spacing = 0,
    ...rest
  }: StackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  const firstValidElementIdx = useRef(-1)

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
      {...rest}
    >
      { Children.map(
        children,
        (element, index) => {
          if (!isValidElement(element)) { return element }

          /**
             * NOTE: this assumes that this element is `StackItem`.
             *
             * Even if the child is not a `StackItem` component,
             * it could forward the prop to `StackItem` deeper in the tree,
             * or implement a custom behavior compatible with `StackItemProps`.
             */
          if (firstValidElementIdx.current === -1) { firstValidElementIdx.current = index }
          return cloneElement(element, {
            ...element.props,
            direction,
            marginBefore:
                element.props.marginBefore ??
                (index > firstValidElementIdx.current ? spacing : 0),
          })
        },

      ) }
    </Styled.Container>
  )
})
