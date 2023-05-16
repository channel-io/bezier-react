import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronSmallUpdown(props: SVGProps<SVGSVGElement>) {
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
        d="M16.207 13.793a1 1 0 0 1 0 1.414l-3.5 3.5a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 1 1 1.414-1.414L12 16.586l2.793-2.793a1 1 0 0 1 1.414 0ZM16.207 10.207a1 1 0 0 1-1.414 0L12 7.414l-2.793 2.793a1 1 0 0 1-1.414-1.414l3.5-3.5a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1 0 1.414Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronSmallUpdown)
