import React from 'react'

import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'

import { type VisuallyHiddenProps } from './VisuallyHidden.types'

/**
 * `VisuallyHidden` is a component that visually hides the content. It doesn't render any DOM node.
 * It is useful when you want to provide additional information to screen readers.
 *
 * @example
 *
 * ```tsx
 * <VisuallyHidden>
 *   <span>This is a visually hidden text.</span>
 * </VisuallyHidden>
 * ```
 *
 */
export function VisuallyHidden({
  children,
}: VisuallyHiddenProps) {
  return (
    <VisuallyHiddenPrimitive.Root asChild>
      { children }
    </VisuallyHiddenPrimitive.Root>
  )
}
