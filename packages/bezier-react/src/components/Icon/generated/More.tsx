import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgMore(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 14.5A2.507 2.507 0 0 1 2 12c0-1.375 1.125-2.5 2.5-2.5S7 10.625 7 12s-1.125 2.5-2.5 2.5Zm7.5 0A2.507 2.507 0 0 1 9.5 12c0-1.375 1.125-2.5 2.5-2.5s2.5 1.125 2.5 2.5-1.125 2.5-2.5 2.5Zm5-2.5c0 1.375 1.125 2.5 2.5 2.5S22 13.375 22 12s-1.125-2.5-2.5-2.5A2.507 2.507 0 0 0 17 12Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgMore)
