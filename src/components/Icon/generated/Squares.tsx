import * as React from 'react'
import { SVGProps } from 'react'

function SvgSquares(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 17h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5ZM19 15H9V5h10v10Z"
      />
      <path
        fill="currentColor"
        d="M3.5 21h13a.5.5 0 0 0 .5-.5V19H5V7H3.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5Z"
      />
    </svg>
  )
}

export default SvgSquares
