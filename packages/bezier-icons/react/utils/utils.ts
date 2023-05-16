import { type SVGProps } from 'react'

const BEZIER_ICON_SYMBOL = Symbol('bezier.icon')

export type IconSource = (props: SVGProps<SVGSVGElement>) => JSX.Element

export type BezierIcon = IconSource & { [BEZIER_ICON_SYMBOL]: true }

export function isBezierIcon(arg: unknown): arg is BezierIcon {
  return (
    typeof arg === 'function' &&
    (arg as BezierIcon)[BEZIER_ICON_SYMBOL] === true
  )
}

export function createBezierIcon(source: IconSource): BezierIcon {
  (source as BezierIcon)[BEZIER_ICON_SYMBOL] = true
  return source as BezierIcon
}

const pipe = (...fn: Function[]) => (arg: any) => fn.reduce((acc, cur) => cur(acc), arg)

export function createIconLabel(svgName: string): string {
  const deleteSvgPrefix = (str: string) => str.replace('Svg', '')
  const replaceUppercaseToSpace = (str: string) => str.replace(/([A-Z])/g, ' $1')
  const deleteFirstSpace = (str: string) => str.substring(1)

  return pipe(
    deleteSvgPrefix,
    replaceUppercaseToSpace,
    deleteFirstSpace,
  )(svgName)
}
