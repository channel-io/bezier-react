import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgErrorTriangle(props: SVGProps<SVGSVGElement>) {
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
        d="M20.158 16.737 13.29 5.117a1.5 1.5 0 0 0-2.582 0l-6.867 11.62A1.5 1.5 0 0 0 5.134 19h13.732a1.5 1.5 0 0 0 1.292-2.263ZM15.013 4.099c-1.354-2.292-4.671-2.292-6.026 0L2.12 15.72C.742 18.053 2.424 21 5.134 21h13.732c2.71 0 4.392-2.947 3.014-5.28L15.013 4.1ZM12.001 17.8a1.4 1.4 0 1 1 0-2.801 1.4 1.4 0 0 1 0 2.801ZM12 7a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgErrorTriangle)
