/**
 * The type is custom generated during the build process,
 * so set the type inside this module to 'any'.
 */

const BEZIER_ICON_SYMBOL = Symbol('bezier.icon')

export function isBezierIcon(arg: any) {
  return (
    typeof arg === 'function' &&
    arg[BEZIER_ICON_SYMBOL] === true
  )
}

export function createBezierIcon(source: any) {
  const clone = source
  clone[BEZIER_ICON_SYMBOL] = true
  return clone
}
