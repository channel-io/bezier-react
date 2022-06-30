import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgBold(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8a5.5 5.5 0 0 0 3.377-9.842A5 5 0 0 0 13.5 3H6Zm7.5 7a2 2 0 1 0 0-4H8v4h5.5ZM8 13v5h6a2.5 2.5 0 0 0 0-5H8Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgBold)
