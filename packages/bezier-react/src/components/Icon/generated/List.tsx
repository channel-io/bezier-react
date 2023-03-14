import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgList(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 19a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9 6a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2H9ZM8 12a1 1 0 0 0 1 1h11a1 1 0 1 0 0-2H9a1 1 0 0 0-1 1ZM9 20a1 1 0 1 1 0-2h11a1 1 0 1 1 0 2H9Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgList)
