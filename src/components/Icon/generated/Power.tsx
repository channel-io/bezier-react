import * as React from 'react'
import { SVGProps } from 'react'

function SvgPower(props: SVGProps<SVGSVGElement>) {
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
        d="M13 12h-2V2h2v10ZM2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-3.85-2.256-7.403-5.747-9.049L15.4 4.76A8.046 8.046 0 0 1 20 12c0 4.411-3.589 8-8 8-4.41 0-8-3.589-8-8a8.047 8.047 0 0 1 4.6-7.24L7.746 2.95C4.256 4.598 2 8.15 2 12.001Z"
      />
    </svg>
  )
}

export default SvgPower
