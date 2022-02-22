import * as React from 'react'
import { SVGProps } from 'react'

function SvgBlockIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Zm-1.96 0A8.04 8.04 0 0 1 7.05 18.336L18.336 7.05A8.005 8.005 0 0 1 20.039 12ZM5.663 16.95 16.95 5.663A8.04 8.04 0 0 0 5.664 16.95Z"
      />
    </svg>
  )
}

export default SvgBlockIcon
