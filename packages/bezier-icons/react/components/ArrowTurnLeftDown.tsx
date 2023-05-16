import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowTurnLeftDown(props: SVGProps<SVGSVGElement>) {
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
        d="M7.793 9.793a1 1 0 0 1 1.414 1.414L6.414 14H15a5 5 0 0 0 5-5V5a1 1 0 1 1 2 0v4a7 7 0 0 1-7 7H6.414l2.793 2.793a1 1 0 1 1-1.414 1.414l-4.5-4.5a1 1 0 0 1 0-1.414l4.5-4.5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowTurnLeftDown)
