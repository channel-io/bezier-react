import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgMoreVertical(props: SVGProps<SVGSVGElement>) {
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
        d="M9.5 5c0-1.375 1.125-2.5 2.5-2.5s2.5 1.125 2.5 2.5-1.125 2.5-2.5 2.5A2.507 2.507 0 0 1 9.5 5Zm0 7.5c0-1.375 1.125-2.5 2.5-2.5s2.5 1.125 2.5 2.5S13.375 15 12 15a2.507 2.507 0 0 1-2.5-2.5Zm2.5 5A2.507 2.507 0 0 0 9.5 20c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgMoreVertical)
