import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={3} y={3} width={18} height={18} rx={1} fill="currentColor" />
    </svg>
  )
}
export default createBezierIcon(SvgSquare)
