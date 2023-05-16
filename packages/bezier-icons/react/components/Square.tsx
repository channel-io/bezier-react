import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect fill="currentColor" width={18} height={18} x={3} y={3} rx={1} />
    </svg>
  )
}
export default createBezierIcon(SvgSquare)
