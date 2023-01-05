const BEZIER_ICON_SYMBOL = Symbol('$$bezier.isBezierIcon')

export type IconSource = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export type BezierIconSource = IconSource & { [BEZIER_ICON_SYMBOL]: true }

export function isBezierIcon(arg: unknown): arg is BezierIconSource {
  return (
    typeof arg === 'function' &&
    arg[BEZIER_ICON_SYMBOL] === true
  )
}

export function createBezierIcon(source: IconSource): BezierIconSource {
  source[BEZIER_ICON_SYMBOL] = true
  return source as BezierIconSource
}

export default createBezierIcon
