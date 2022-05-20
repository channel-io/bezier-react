import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgVolumeUpFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M13.014 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-1a.997.997 0 0 1-.707-.294L7.6 17H3.014a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1H7.6l4.707-4.707A.997.997 0 0 1 13.014 2Zm7.1 3.706L18.7 7.12a6.908 6.908 0 0 1 0 9.758l1.414 1.415c3.47-3.47 3.47-9.117 0-12.587Zm-2.417 2.417-1.414 1.414a3.486 3.486 0 0 1 0 4.925l1.414 1.414a5.488 5.488 0 0 0 0-7.753Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgVolumeUpFilled)
