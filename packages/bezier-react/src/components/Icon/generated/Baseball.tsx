import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBaseball(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.479 2 2 6.477 2 12s4.478 10 10 10c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 2a7.964 7.964 0 0 0-4.728 1.546A8.973 8.973 0 0 1 10 12a8.973 8.973 0 0 1-2.727 6.454A7.964 7.964 0 0 0 12 20a7.964 7.964 0 0 0 4.727-1.546A8.973 8.973 0 0 1 14 12a8.973 8.973 0 0 1 2.728-6.455A7.964 7.964 0 0 0 12 4Zm6.182 2.922A6.98 6.98 0 0 0 16 12c0 2 .838 3.803 2.182 5.078A7.967 7.967 0 0 0 20.001 12a7.967 7.967 0 0 0-1.819-5.078ZM4 12c0-1.928.682-3.697 1.818-5.078A6.98 6.98 0 0 1 8 12a6.98 6.98 0 0 1-2.182 5.078A7.967 7.967 0 0 1 4 12Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBaseball)
