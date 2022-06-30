import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgMenuUnfold(props: SVGProps<SVGSVGElement>) {
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
        d="M3.016 5a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2h-16a1 1 0 0 0-1 1ZM12 12a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1ZM21.016 19a1 1 0 0 1-1 1h-7a1 1 0 1 1 0-2h7a1 1 0 0 1 1 1Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgMenuUnfold)
