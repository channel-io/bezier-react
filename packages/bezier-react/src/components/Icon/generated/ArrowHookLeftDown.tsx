import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowHookLeftDown(props: SVGProps<SVGSVGElement>) {
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
        d="M14.5 3.026H11a1 1 0 1 0 0 2h3.5c2.481 0 4.5 2.02 4.5 4.5 0 2.482-2.019 4.5-4.5 4.5H5.181l3.292-3.293A1 1 0 0 0 7.06 9.32l-4.62 4.62a1.501 1.501 0 0 0 0 2.12l4.62 4.62a1 1 0 1 0 1.414-1.413l-3.24-3.24H14.5c3.584 0 6.5-2.917 6.5-6.5 0-3.585-2.916-6.5-6.5-6.5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowHookLeftDown)
