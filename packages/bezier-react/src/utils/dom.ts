/**
 * Converts a boolean condition to an ARIA attribute value.
 *
 * This function is designed to return `true` if the condition is `true`, making it suitable
 * for ARIA attributes that require a `true` or `undefined` value. If the condition is `false`
 * or `undefined`, the function returns `undefined`.
 */
export function ariaAttr(condition?: boolean) {
  return condition ? true : undefined
}
