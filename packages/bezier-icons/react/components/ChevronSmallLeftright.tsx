import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronSmallLeftright(props: SVGProps<SVGSVGElement>) {
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
        d="M10.207 16.207a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 1.414L7.414 12l2.793 2.793a1 1 0 0 1 0 1.414ZM13.793 16.207a1 1 0 0 1 0-1.414L16.586 12l-2.793-2.793a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414l-3.5 3.5a1 1 0 0 1-1.414 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronSmallLeftright)
