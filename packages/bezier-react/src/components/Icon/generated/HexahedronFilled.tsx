import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgHexahedronFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M13 2.577a2 2 0 0 0-2 0L4 6.62A2 2 0 0 0 3 8.35v8.083a2 2 0 0 0 1 1.732l7 4.041a2 2 0 0 0 2 0l7-4.041a2 2 0 0 0 1-1.732V8.35a2 2 0 0 0-1-1.732l-7-4.042Zm-2.507 10.318a1 1 0 0 1 .507.87V19a1 1 0 1 0 2 0v-5.235a1 1 0 0 1 .507-.87l5.02-2.846a1 1 0 0 0-.987-1.74l-5.047 2.862a1 1 0 0 1-.986 0L6.455 8.306a1 1 0 1 0-.986 1.74l5.024 2.85Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgHexahedronFilled)
