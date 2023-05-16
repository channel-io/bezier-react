import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWater(props: SVGProps<SVGSVGElement>) {
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
        d="m18.11 10.065-5.665-8.41A.532.532 0 0 0 12 1.42a.532.532 0 0 0-.444.236L5.89 10.065c-1.743 2.586-1.907 6.026-.146 8.599 1.52 2.22 3.889 3.332 6.257 3.332s4.736-1.111 6.256-3.332c1.762-2.573 1.597-6.013-.146-8.6Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWater)
