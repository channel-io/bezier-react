import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronLeftDouble(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.24 19.65a1 1 0 1 0 1.52-1.3L13.316 12l5.442-6.35a1 1 0 1 0-1.518-1.3l-6 7a1 1 0 0 0 0 1.3l6 7Z"
      />
      <path
        fill="currentColor"
        d="M9.24 19.65a1 1 0 1 0 1.52-1.3L5.316 12l5.442-6.35a1 1 0 1 0-1.518-1.3l-6 7a1 1 0 0 0 0 1.3l6 7Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronLeftDouble)
