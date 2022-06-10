import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgGift(props: SVGProps<SVGSVGElement>) {
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
        d="M15.5 2A3.5 3.5 0 0 0 12 5.5 3.5 3.5 0 1 0 5.337 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-.337A3.5 3.5 0 0 0 15.5 2Zm0 5A1.5 1.5 0 1 0 14 5.5V7h1.5Zm-7 0H10V5.5A1.5 1.5 0 1 0 8.5 7ZM5 9v10h5V9H5Zm9 0h5v10h-5V9Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgGift)
