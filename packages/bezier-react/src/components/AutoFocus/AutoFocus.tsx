/* External dependencies */
import React, {
  forwardRef,
  useCallback,
} from 'react'
import { Slot } from '@radix-ui/react-slot'

/* Internal dependencies */
import useMergeRefs from '~/src/hooks/useMergeRefs'
import { type AutoFocusProps } from './AutoFocus.types'

/**
 * `AutoFocus` is a component that automatically focuses its child element when they are added to the document.
 * It is useful when you want to focus on a specific element when the component is mounted.
 * It doesn't render any DOM node.
 *
 * @example
 *
 * ```tsx
 * <AutoFocus>
 *   <button>Close</button>
 * </AutoFocus>
 *
 * // You can also use it with the additional condition
 * <AutoFocus when={condition}>
 *   <button>Close</button>
 * </AutoFocus>
 * ```
 */
export const AutoFocus = forwardRef<HTMLElement, AutoFocusProps>(function AutoFocus({
  children,
  when = true,
  ...rest
}, forwardedRef) {
  const focus = useCallback((node: HTMLElement | null) => {
    if (node && when) {
      node.focus()
    }
  }, [when])

  const ref = useMergeRefs(focus, forwardedRef)

  return (
    <Slot
      ref={ref}
      {...rest}
    >
      { children }
    </Slot>
  )
})
