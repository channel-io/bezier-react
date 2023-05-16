import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTrendingDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m11.634 17.849-5.166-5.167A.4.4 0 0 1 6.751 12H10V6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V12h3.25a.4.4 0 0 1 .282.682l-5.165 5.167a.518.518 0 0 1-.732 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTrendingDown)
