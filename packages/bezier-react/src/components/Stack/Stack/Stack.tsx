/* External dependencies */
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react'
import type { Ref } from 'react'

/* Internal dependencies */
import * as Styled from './Stack.styled'
import type StackProps from './Stack.types'

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
function Stack(
  {
    as = 'div',
    testId = 'bezier-react-stack',
    style,
    className,
    interpolation,
    children,
    direction,
    justify = 'start',
    align = 'start',
    spacing = 0,
    ...rest
  }: StackProps,
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
      {...rest}
    >
      { Children.map(
        children,
        (element, index) => (
          isValidElement(element)
            /**
             * NOTE: this assumes that this element is `StackItem`.
             *
             * Even if the child is not a `StackItem` component,
             * it could forward the prop to `StackItem` deeper in the tree,
             * or implement a custom behavior compatible with `StackItemProps`.
             */
            ? cloneElement(element, {
              ...element.props,
              direction,
              marginBefore:
                element.props.marginBefore ??
                (index > 0 ? spacing : 0),
            })
            : element
        ),
      ) }
    </Styled.Container>
  )
}

export default forwardRef(Stack)
