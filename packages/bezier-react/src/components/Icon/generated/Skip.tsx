import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSkip(props: SVGProps<SVGSVGElement>) {
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
        d="M15.5 11.4c.4.3.4.9 0 1.2l-10 7.5a.75.75 0 0 1-1.2-.6v-15a.75.75 0 0 1 1.2-.6l10 7.5Z"
      />
      <path
        fill="currentColor"
        d="M16.3 4.2a.6.6 0 0 1 .6-.6h2.2a.6.6 0 0 1 .6.6v15.6a.6.6 0 0 1-.6.6h-2.2a.6.6 0 0 1-.6-.6V4.2Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSkip)
