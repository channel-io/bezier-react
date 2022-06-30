import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgCheck(props: SVGProps<SVGSVGElement>) {
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
        d="m9.071 16.142-4.95-4.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0L20.846 7.194a1 1 0 1 0-1.414-1.414L9.071 16.142Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgCheck)
