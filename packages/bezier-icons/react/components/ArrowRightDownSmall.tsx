import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowRightDownSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M7.05 7.05a1 1 0 0 0 0 1.414l6.779 6.779H8.463a1 1 0 1 0 0 2h7.779a1 1 0 0 0 1-1V8.464a1 1 0 1 0-2 0v5.364L8.464 7.05a1 1 0 0 0-1.414 0Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowRightDownSmall)
