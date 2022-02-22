import * as React from 'react'
import { SVGProps } from 'react'

function SvgColumnIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14 6h-4v12h4V6Zm2 0v12h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3ZM5 6h3v12H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0-2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5Z"
      />
    </svg>
  )
}

export default SvgColumnIcon
