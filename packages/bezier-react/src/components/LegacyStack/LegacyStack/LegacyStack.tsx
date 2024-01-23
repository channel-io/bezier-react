import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useRef,
} from 'react'

import classNames from 'classnames'

import type LegacyStackProps from './LegacyStack.types'

import styles from './LegacyStack.module.scss'

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
export const LegacyStack = forwardRef<HTMLElement, LegacyStackProps>(function Stack({
  as = 'div',
  testId = 'bezier-legacy-stack',
  className,
  children,
  direction,
  justify = 'start',
  align = 'stretch',
  spacing = 0,
  ...rest
}, forwardedRef) {
  const Comp = as
  const firstValidElementIdx = useRef(-1)

  return (
    <Comp
      className={classNames(
        styles.LegacyStack,
        styles[`direction-${direction}`],
        styles[`justify-${justify}`],
        styles[`align-${align}`],
        className,
      )}
      ref={forwardedRef}
      data-testid={testId}
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
    </Comp>
  )
})
