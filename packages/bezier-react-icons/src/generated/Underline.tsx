import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgUnderline(props: SVGProps<SVGSVGElement>) {
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
        d="M7 4a1 1 0 0 0-2 0v7a7 7 0 1 0 14 0V4a1 1 0 1 0-2 0v7a5 5 0 0 1-10 0V4ZM4 19a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgUnderline)
