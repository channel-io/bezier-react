import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgLaptop(props: SVGProps<SVGSVGElement>) {
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
        d="M4 17h16V7H4v10Zm18 0V6.5c0-.827-.673-1.5-1.5-1.5h-17C2.673 5 2 5.673 2 6.5V17H1a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2h-1Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgLaptop)
