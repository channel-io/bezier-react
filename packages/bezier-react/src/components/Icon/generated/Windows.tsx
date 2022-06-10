import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgWindows(props: SVGProps<SVGSVGElement>) {
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
        d="M21 11.573V2.966L11.223 4.41v7.204l9.777-.04ZM3 5.626l7.361-1.088v7.08l-7.36.03V5.626Zm0 12.887v-6.092l7.361.03v7.093l-7.36-1.031Zm18 2.521-9.777-1.369v-7.21l9.777.041v8.538Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgWindows)
