import * as React from 'react'
import { SVGProps } from 'react'

function SvgChevronSmallDownIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M17.207 9.793a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0l-4.5-4.5a1 1 0 0 1 1.414-1.414L12 13.586l3.793-3.793a1 1 0 0 1 1.414 0Z"
      />
    </svg>
  )
}

export default SvgChevronSmallDownIcon
