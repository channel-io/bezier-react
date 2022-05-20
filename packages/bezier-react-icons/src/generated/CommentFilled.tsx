import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgCommentFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7 3a4 4 0 0 0-4 4v13.96c0 1.257 1.455 1.957 2.437 1.171l3.366-2.693a2 2 0 0 1 1.25-.438H17a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7Zm0 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgCommentFilled)
