import * as React from 'react'
import { SVGProps } from 'react'

function SvgBus(props: SVGProps<SVGSVGElement>) {
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
        d="M6 14.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 2a4 4 0 0 1 4 4v15a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2H7v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a4 4 0 0 1 4-4h10Zm2 4v4H5V6l.005-.15A2 2 0 0 1 7 4h10l.15.005A2 2 0 0 1 19 6Zm0 6H5v5h14v-5Z"
      />
    </svg>
  )
}

export default SvgBus
