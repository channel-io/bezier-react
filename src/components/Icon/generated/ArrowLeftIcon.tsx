import * as React from 'react'
import { SVGProps } from 'react'

function SvgArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m11.538 21.427 1.457-1.37L6.363 13H21v-2H6.389l6.606-7.03-1.457-1.37-7.881 8.386a1.5 1.5 0 0 0 0 2.055l7.881 8.386Z"
      />
    </svg>
  )
}

export default SvgArrowLeftIcon
