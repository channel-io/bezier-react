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
        d="M11 2.577a2 2 0 0 1 2 0l7 4.042a2 2 0 0 1 1 1.732v8.083a2 2 0 0 1-1 1.732l-7 4.041a2 2 0 0 1-2 0l-7-4.041a2 2 0 0 1-1-1.732V8.35a2 2 0 0 1 1-1.732l7-4.042Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 13.765a1 1 0 0 0-.507-.87l-5.024-2.85a1 1 0 0 1 .986-1.739l5.052 2.865a1 1 0 0 0 .986 0L17.54 8.31a1 1 0 1 1 .986 1.74l-5.02 2.846a1 1 0 0 0-.506.87V19a1 1 0 1 1-2 0v-5.235Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgHexahedronFilled)
