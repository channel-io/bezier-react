import * as React from 'react'
import { SVGProps } from 'react'

function SvgChevronSmallUp(props: SVGProps<SVGSVGElement>) {
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
        d="M6.793 14.207a1 1 0 0 1 0-1.414l4.5-4.5a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1-1.414 1.414L12 10.414l-3.793 3.793a1 1 0 0 1-1.414 0Z"
      />
    </svg>
  )
}

export default SvgChevronSmallUp
