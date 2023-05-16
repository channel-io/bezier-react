import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronUp(props: SVGProps<SVGSVGElement>) {
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
        d="M4.293 15.207a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L12 8.914l-6.293 6.293a1 1 0 0 1-1.414 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronUp)
