import * as React from 'react'
import { SVGProps } from 'react'

function SvgDot(props: SVGProps<SVGSVGElement>) {
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
        d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </svg>
  )
}

export default SvgDot
