import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgTriangleDown(props: SVGProps<SVGSVGElement>) {
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
        d="M11.703 16.37 6.09 9.635A.387.387 0 0 1 6.387 9h11.226c.327 0 .506.382.297.635l-5.613 6.735a.386.386 0 0 1-.594 0"
      />
    </svg>
  )
}

export default createBezierIcon(SvgTriangleDown)
