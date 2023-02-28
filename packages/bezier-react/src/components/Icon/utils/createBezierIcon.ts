const BEZIER_ICON_SYMBOL = Symbol('$$bezier.isBezierIcon')

export type IconSource = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export type BezierIcon = IconSource & { [BEZIER_ICON_SYMBOL]: true }

export function isBezierIcon(arg: unknown): arg is BezierIcon {
  return (
    typeof arg === 'function' &&
    arg[BEZIER_ICON_SYMBOL] === true
  )
}

export function createBezierIcon(source: IconSource): BezierIcon {
  source[BEZIER_ICON_SYMBOL] = true
  return source as BezierIcon
}

export default createBezierIcon
