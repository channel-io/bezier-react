import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronUpDouble(props: SVGProps<SVGSVGElement>) {
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
        d="M4.35 17.24a1 1 0 1 0 1.3 1.52L12 13.316l6.35 5.442a1 1 0 1 0 1.3-1.518l-7-6a1 1 0 0 0-1.3 0l-7 6Z"
      />
      <path
        fill="currentColor"
        d="M4.35 9.24a1 1 0 1 0 1.3 1.52L12 5.316l6.35 5.442a1 1 0 1 0 1.3-1.518l-7-6a1 1 0 0 0-1.3 0l-7 6Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronUpDouble)
