import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWindowsMinimize(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={7} y={12} width={10} height={1} fill="currentColor" />
    </svg>
  )
}
export default createBezierIcon(SvgWindowsMinimize)
