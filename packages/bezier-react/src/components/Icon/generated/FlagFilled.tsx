import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgFlagFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5 3a1 1 0 0 0-1 1v17a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1Zm3 0a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12.382a1 1 0 0 0 .894-1.447L19 9l2.276-4.553A1 1 0 0 0 20.382 3H8Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgFlagFilled)
